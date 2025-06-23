"use client"

import { useState, useEffect } from "react"
import { Heart, Sun, BookOpen, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Component() {
  const [timeElapsed, setTimeElapsed] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [bomDiaCount, setBomDiaCount] = useState(1127)
  const [teAmoCount, setTeAmoCount] = useState(643)
  const [showDigitalLetter, setShowDigitalLetter] = useState(false)

  // Data de início: 31 de maio de 2022
  const startDate = new Date("2022-05-31T00:00:00")

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const diff = now.getTime() - startDate.getTime()

      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365))
      const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30))
      const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      setTimeElapsed({ years, months, days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 p-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 pt-8">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Heart className="w-8 h-8 text-pink-500 fill-pink-500 animate-pulse" />
            <Heart className="w-6 h-6 text-rose-400 fill-rose-400 animate-pulse delay-100" />
            <Heart className="w-4 h-4 text-pink-300 fill-pink-300 animate-pulse delay-200" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            Para você, Julia ❤️
          </h1>
          <p className="text-lg text-gray-700 font-medium">Meu amor, minha vida, minha inspiração 💙</p>
        </div>

        {/* Contador Principal */}
        <Card className="bg-white/80 backdrop-blur-sm border-pink-200 shadow-xl">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Nosso tempo juntos 💖</h2>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-center">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-lg p-4">
                <div className="text-2xl font-bold">{timeElapsed.years}</div>
                <div className="text-sm">Anos</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-blue-600 text-white rounded-lg p-4">
                <div className="text-2xl font-bold">{timeElapsed.months}</div>
                <div className="text-sm">Meses</div>
              </div>
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-lg p-4">
                <div className="text-2xl font-bold">{timeElapsed.days}</div>
                <div className="text-sm">Dias</div>
              </div>
              <div className="bg-gradient-to-br from-purple-600 to-pink-500 text-white rounded-lg p-4">
                <div className="text-2xl font-bold">{timeElapsed.hours}</div>
                <div className="text-sm">Horas</div>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-lg p-4">
                <div className="text-2xl font-bold">{timeElapsed.minutes}</div>
                <div className="text-sm">Minutos</div>
              </div>
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-lg p-4">
                <div className="text-2xl font-bold">{timeElapsed.seconds}</div>
                <div className="text-sm">Segundos</div>
              </div>
            </div>
            <p className="text-center mt-6 text-gray-600 font-medium">Desde 31 de Maio de 2022 ❤️</p>
          </CardContent>
        </Card>

        {/* Links para Poema e Cartinha */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white/80 backdrop-blur-sm border-pink-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-6 text-center">
              <BookOpen className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-700 mb-4">Poema Especial</h3>
              <Button
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.open("https://www.youtube.com/watch?v=yQFImndjBBw", "_blank")}
              >
                Ver o Poema 📝
              </Button>
              <p className="text-sm text-gray-500 mt-2">"Seu Nome" - Um poema que me lembra você</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-pink-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-6 text-center">
              <Mail className="w-12 h-12 text-rose-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-700 mb-4">Cartinha de Amor</h3>

              {!showDigitalLetter ? (
                <div className="space-y-4">
                  <Button
                    className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 mr-2"
                    onClick={() => window.open("/carta.pdf", "_blank")}
                  >
                    Ver PDF 📄
                  </Button>
                  <Button
                    className="bg-gradient-to-r from-purple-500 to-rose-500 hover:from-purple-600 hover:to-rose-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => setShowDigitalLetter(true)}
                  >
                    Ler Digitada 💌
                  </Button>
                  <p className="text-sm text-gray-500 mt-2">Escolha como quer ler minha carta ❤️</p>
                  <p className="text-xs text-gray-400">(A letra não ajuda muito KKKKK)</p>
                </div>
              ) : (
                <div className="text-left space-y-4 max-w-md mx-auto">
                  <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-lg border border-pink-200">
                    <h4 className="text-lg font-bold text-gray-700 mb-4 text-center">Meu amor, Júlia</h4>
                    <div className="space-y-3 text-gray-700 leading-relaxed">
                      <p>
                        Esta carta vem direto do meu coração, transbordando um sentimento que só você me causa. Sei que
                        não somos as pessoas mais fáceis, e que a vida a dois pode ter seus desafios, mas meu dia
                        simplesmente fica melhor quando estou com você.
                      </p>

                      <p>
                        Hoje senti uma falta enorme do seu "bom diaa" logo cedo. Aquilo me faz um bem danado. Quero que
                        saiba que estou aqui para te apoiar em tudo, nos momentos bons e nos desafiadores. Acredito que
                        nos complementamos de verdade.
                      </p>

                      <p className="italic">
                        (E sim, a letra não ajuda muito, KKKKKKK, mas o carinho é sincero). Se quiser trocar uma
                        ideia...
                      </p>
                    </div>
                  </div>
                  <Button
                    className="bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => setShowDigitalLetter(false)}
                  >
                    ← Voltar
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Contadores de Bom Dia e Te Amo */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white/80 backdrop-blur-sm border-yellow-200 shadow-lg">
            <CardContent className="p-6 text-center">
              <Sun className="w-16 h-16 text-yellow-500 mx-auto mb-4 animate-bounce" />
              <h3 className="text-2xl font-bold text-gray-700 mb-4">Bom Dia! ☀️</h3>
              <div className="text-4xl font-bold text-yellow-600 mb-4">{bomDiaCount}</div>
              <Button
                onClick={() => {
                  setBomDiaCount(bomDiaCount + 1)
                  window.open("https://wa.link/1poeff", "_blank")
                }}
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Mais um Bom Dia! 🌅
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-red-200 shadow-lg">
            <CardContent className="p-6 text-center">
              <Heart className="w-16 h-16 text-red-500 fill-red-500 mx-auto mb-4 animate-pulse" />
              <h3 className="text-2xl font-bold text-gray-700 mb-4">Te Amo! ❤️</h3>
              <div className="text-4xl font-bold text-red-600 mb-4">{teAmoCount}</div>
              <Button
                onClick={() => {
                  setTeAmoCount(teAmoCount + 1)
                  window.open("https://wa.link/ceag66", "_blank")
                }}
                className="bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Mais um Te Amo! 💕
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center py-8">
          <div className="flex justify-center items-center gap-2 mb-4">
            {[...Array(7)].map((_, i) => (
              <Heart
                key={i}
                className={`w-4 h-4 text-pink-400 fill-pink-400 animate-pulse`}
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
          <p className="text-gray-700 font-medium text-lg">Criado com todo meu amor para você, Julia 💙</p>
          <p className="text-gray-600 text-sm mt-2">Você é a razão do meu sorriso todos os dias ✨</p>
        </div>
      </div>
    </div>
  )
}
