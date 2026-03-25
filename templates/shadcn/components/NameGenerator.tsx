'use client'
import { useEffect, useState } from 'react'
import { CharacterInfo, GeneratedName, ConfigType } from '@/types/name-generators'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Info, X } from 'lucide-react'
import { useTranslations } from 'next-intl'

// Move components outside of the main component and fix the key prop issue
const TraitBadge = ({ trait, onRemove }: { trait: string; onRemove: (trait: string) => void }) => (
  <Badge className="bg-zinc-700 text-white px-3 py-1">
    {trait}
    <button
      onClick={() => onRemove(trait)}
      className="ml-2 hover:text-red-400"
      type="button"
    >
      <X className="h-3 w-3" />
    </button>
  </Badge>
)

const NameItem = ({ name, index }: { name: GeneratedName; index: number }) => (
  <div className="mb-5">
    <p className="text-lg font-semibold mb-2">{index + 1}. {name.name}：</p>
    <p className="mb-2">{name.description}</p>
    <p className="text-gray-400">Yorum:{name.review}</p>
  </div>
)



// Update the component to use locale directly
export default function NameGenerator({ locale }: { locale: string }) {

  const t = useTranslations('NameGenerators')
  const defaultConfig = t.raw('defaultConfig') as ConfigType
  const defaultNames = t.raw('defaultNames') as GeneratedName[]
  const defaultCharacterInfo = t.raw('defaultCharacterInfo') as CharacterInfo

  // Rest of your state and handlers remain the same...
  const [characterInfo, setCharacterInfo] = useState<CharacterInfo>(defaultCharacterInfo)
  const [generatedNames, setGeneratedNames] = useState<GeneratedName[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [traitInput, setTraitInput] = useState('')

  // Update the fetch call to use the unwrapped locale
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/generate-names', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept-Language': locale
        },
        body: JSON.stringify({
          ...characterInfo,
          defaultNames,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to generate names')
      }

      const data = await response.json()
      setGeneratedNames(data.characters)
    } catch (err) {
      setError(t('errorMessage') || 'İsim oluşturulurken hata oluştu, lütfen daha sonra tekrar deneyin.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setCharacterInfo(prev => ({ ...prev, [name]: value }))
  }

  const handleTraitAdd = () => {
    if (traitInput.trim()) {
      setCharacterInfo(prev => ({
        ...prev,
        traits: [...prev.traits, traitInput.trim()]
      }))
      setTraitInput('')
    }
  }

  const handleTraitRemove = (trait: string) => {
    setCharacterInfo(prev => ({
      ...prev,
      traits: prev.traits.filter(t => t !== trait)
    }))
  }

  const renderTraits = () => (
    <div className="flex flex-wrap gap-2 mb-2">
      {characterInfo.traits.map((trait, index) => (
        <TraitBadge
          key={`${trait}-${index}`}
          trait={trait}
          onRemove={handleTraitRemove}
        />
      ))}
    </div>
  )

  const renderNames = () => {
    const namesToDisplay = generatedNames.length > 0 ? generatedNames : defaultNames
    return (
      <div className="space-y-6 text-gray-100">
        {namesToDisplay.map((name, idx) => (
          <NameItem
            key={`${name.name}-${idx}`}
            name={name}
            index={idx}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-zinc-100 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Column - Input Form */}
          <div className="w-full md:w-1/2">
            <Card className="border-4 border-zinc-800">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block font-bold mb-3">Karakterin cinsiyetini belirleyin</label>
                    <div className="flex gap-4">
                      {defaultConfig.genderOptions.map((gender, idx) => (
                        <Button
                          key={`gender-${gender}-${idx}`}
                          type="button"
                          variant={characterInfo.gender === gender ? "default" : "outline"}
                          className="w-1/3"
                          onClick={() => setCharacterInfo(prev => ({ ...prev, gender }))}
                        >
                          {gender}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold mb-3">Karakterin arka planını belirleyin</label>
                    <div className="flex gap-4">
                      {defaultConfig.genreOptions.map((genre) => (
                        <Button
                          key={`genre-${genre}`}
                          type="button"
                          variant={characterInfo.genre === genre ? "default" : "outline"}
                          className="w-1/3"
                          onClick={() => setCharacterInfo(prev => ({ ...prev, genre }))}
                        >
                          {genre}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold mb-3">Soyadı stilini belirleyin</label>
                    <div className="flex gap-4">
                      {defaultConfig.nameStyleOptions.map((nameStyle) => (
                        <Button
                          key={`style-${nameStyle}`}
                          type="button"
                          variant={characterInfo.nameStyle === nameStyle ? "default" : "outline"}
                          className="w-1/3"
                          onClick={() => setCharacterInfo(prev => ({ ...prev, nameStyle }))}
                        >
                          {nameStyle}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold mb-3">Üretilecek isim sayısını seçin</label>
                    <div className="flex gap-4">
                      {defaultConfig.countOptions.map((count) => (
                        <Button
                          key={`count-${count}`}
                          type="button"
                          variant={characterInfo.count === count ? "default" : "outline"}
                          className="w-1/4"
                          onClick={() => setCharacterInfo(prev => ({ ...prev, count }))}
                        >
                          {count} adet
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold mb-3">Karakter için kişilik anahtar kelimeleri girin</label>
                    {renderTraits()}
                    <div className="flex gap-2">
                      <Input
                        value={traitInput}
                        onChange={(e) => setTraitInput(e.target.value)}
                        placeholder="Tek bir anahtar kelime girin"
                        className="flex-grow"
                      />
                      <Button
                        type="button"
                        onClick={handleTraitAdd}
                        className="bg-amber-200 text-neutral-800 hover:bg-amber-300"
                      >
                        Anahtar kelime ekle
                      </Button>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold mb-3">Ek fikir ve gereksinimleri yazın</label>
                    <Textarea
                      name="additionalInfo"
                      value={characterInfo.additionalInfo}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Geleneksel bir kurgu yazıyorum, isimlerin klasik tona yakın olmasını istiyorum."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-amber-200 text-neutral-800 hover:bg-amber-300 text-xl py-6"
                  >
                    {isLoading ? 'Oluşturuluyor...' : 'İsim oluştur'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Generated Names */}
          <div className="w-full md:w-1/2">
            <Card className="bg-zinc-700 text-white h-full">
              <CardContent className="p-6">
                <div className="relative">
                  <h2 className="text-red-500 text-4xl font-bold text-center mb-2">
                    Karakter İsmi Özelleştirme
                    <span className="text-xl ml-2">x{characterInfo.count}</span>
                  </h2>
                  <h3 className="text-gray-400 text-center mb-6">
                    {characterInfo.gender} / {characterInfo.genre} / {characterInfo.nameStyle} / {characterInfo.traits.join(',')}
                  </h3>
                  {renderNames()}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
