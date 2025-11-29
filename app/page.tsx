"use client"

import { Wrench, Hammer, Wind, FileCheck, Users, Droplet, Phone, Mail, MapPin } from "lucide-react"
import { useState, useEffect } from "react"

export default function Home() {
  const [activeMenu, setActiveMenu] = useState("home")
  const [scrollY, setScrollY] = useState(0)
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set())

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleElements((prev) => new Set([...prev, entry.target.id]))
        }
      })
    }, observerOptions)

    // Összes fade-in element megfigyelése
    document.querySelectorAll(".fade-in-up").forEach((element) => {
      if (element.id) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setActiveMenu(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-primary text-primary-foreground">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/images/ewo-white.png" alt="EWO-2000" className="h-12 w-auto" />
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className={`font-medium transition-all border-b-2 pb-1 ${
                activeMenu === "home"
                  ? "border-primary-foreground/20"
                  : "border-transparent hover:border-primary-foreground"
              }`}
              style={{ fontFamily: "Rubik", fontWeight: 500, fontSize: "14px" }}
            >
              FŐOLDAL
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className={`font-medium transition-all border-b-2 pb-1 ${
                activeMenu === "services"
                  ? "border-primary-foreground/20"
                  : "border-transparent hover:border-primary-foreground"
              }`}
              style={{ fontFamily: "Rubik", fontWeight: 500, fontSize: "14px" }}
            >
              SZOLGÁLTATÁSAINK
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`font-medium transition-all border-b-2 pb-1 ${
                activeMenu === "contact"
                  ? "border-primary-foreground/20"
                  : "border-transparent hover:border-primary-foreground"
              }`}
              style={{ fontFamily: "Rubik", fontWeight: 500, fontSize: "14px" }}
            >
              KAPCSOLAT
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-4 py-2 bg-primary-foreground text-primary rounded-lg font-medium text-sm hover:bg-accent hover:text-primary-foreground transition-colors"
            >
              Kapcsolat
            </button>
          </div>
        </nav>
      </header>

      <section
        id="home"
        className="relative w-full min-h-screen py-0 sm:py-0 md:py-0 overflow-hidden flex flex-col justify-start pt-32 sm:pt-40 md:pt-48"
      >
        {/* Parallax background layer */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/bg.png')",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />

        {/* Content layer on top of parallax background */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-foreground pt-0 sm:pt-0">
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-medium mb-4 text-balance leading-tight"
            style={{ fontFamily: "Rubik", fontWeight: 500, fontSize: "66px" }}
          >
            AUTÓ SZERVÍZ ÉS
            <br />
            KAROSSZÉRIA JAVÍTÁS
          </h1>
          <p
            className="mb-8 max-w-3xl mx-auto text-balance"
            style={{ fontFamily: "Rubik", fontWeight: 300, fontSize: "16px" }}
          >
            Üdvözöljük Érd legjobban felszerelt, márkafüggetlen járműszervizénél!
          </p>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-48 sm:mt-64 md:mt-80">
          <div className="flex flex-col md:flex-row items-stretch text-primary-foreground">
            {/* Feature 1 */}
            <div className="flex-1 text-center flex flex-col items-center justify-center py-6 md:py-0">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                  <Wrench className="w-8 h-8" />
                </div>
              </div>
              <h3 className="mb-3" style={{ fontFamily: "Rubik", fontWeight: 500, fontSize: "18px" }}>
                SZAKÉRTŐ MŰHELY
              </h3>
              <p
                className="text-primary-foreground/90 leading-relaxed px-4 md:px-6"
                style={{ fontFamily: "Rubik", fontWeight: 300, fontSize: "14px" }}
              >
                Az autószervizünkben minden munkát szakértő, tapasztalt szakemberek végzik, hogy járműve mindig a
                legjobb kezekben legyen.
              </p>
            </div>

            {/* Vertical white line separator */}
            <div className="hidden md:block w-px h-full bg-white/30"></div>

            {/* Feature 2 */}
            <div className="flex-1 text-center flex flex-col items-center justify-center py-6 md:py-0 md:px-6">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                  <FileCheck className="w-8 h-8" />
                </div>
              </div>
              <h3 className="mb-3" style={{ fontFamily: "Rubik", fontWeight: 500, fontSize: "18px" }}>
                AUTÓDIAGNOSZTIKA
              </h3>
              <p
                className="text-primary-foreground/90 leading-relaxed px-4 md:px-6"
                style={{ fontFamily: "Rubik", fontWeight: 300, fontSize: "14px" }}
              >
                Kínálatunkban szerepel műszeres autódiagnosztika és hibakeresés.
              </p>
            </div>

            {/* Vertical white line separator */}
            <div className="hidden md:block w-px h-full bg-white/30"></div>

            {/* Feature 3 */}
            <div className="flex-1 text-center flex flex-col items-center justify-center py-6 md:py-0">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8" />
                </div>
              </div>
              <h3 className="mb-3" style={{ fontFamily: "Rubik", fontWeight: 500, fontSize: "18px" }}>
                CSALÁDIAS KÖRNYEZET
              </h3>
              <p
                className="text-primary-foreground/90 leading-relaxed px-4 md:px-6"
                style={{ fontFamily: "Rubik", fontWeight: 300, fontSize: "14px" }}
              >
                Családi vállalkozásunk közel 15 évvel ezelőtti megalakulása óta kínálja szervizszolgáltatásait.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 my-0">
        <h2
          id="services-title"
          className="fade-in-up text-center mb-6 text-balance"
          style={{ fontFamily: "Rubik", fontWeight: 500, fontSize: "40px" }}
        >
          SZOLGÁLTATÁSAINK
        </h2>
        <p
          id="services-desc"
          className="fade-in-up text-center text-muted-foreground mb-12 sm:mb-16 max-w-3xl mx-auto"
          style={{ fontFamily: "Rubik", fontWeight: 300, fontSize: "16px" }}
        >
          Érden található 3 beállásos javítóműhelyünkben a szervizszolgáltatásokon túl karosszériajavítással, valamint
          fényezőműhellyel, esztergaműhellyel ugyanakkor széleskörű hatósági engedélyeknek köszönhetően műsaki
          vizsgáztatással, zöldkártyáztatással, valamint eredetiségvizsgálattal állunk rendelkezésére.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Service 1 */}
          <div
            id="service-1"
            className="fade-in-up bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="h-48 bg-muted overflow-hidden">
              <img src="/images/szerviz.jpg" alt="Szervíz szolgáltatás" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 sm:p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3">Szervíz szolgáltatás</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Teljes körű szervíz szolgáltatások: olajcsere, szűrök cseréje, fékek ellenőrzése, műszaki vizsga
                felkészítés és egyéb karbantartási munka.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div
            id="service-2"
            className="fade-in-up bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="h-48 bg-muted overflow-hidden">
              <img
                src="/images/karosszeria.jpg"
                alt="Karosszériajavítás, fényezés"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 sm:p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Hammer className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3">Karosszériajavítás, fényezés</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Baleset utáni és időjárási sérülések profi javítása. Benyomódások, törések, rozsdásodott részek
                helyreállítása és cseréje.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div
            id="service-3"
            className="fade-in-up bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="h-48 bg-muted overflow-hidden">
              <img src="/images/futomu.jpg" alt="3D futómű állítás" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 sm:p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Droplet className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3">3D futómű állítás</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Modern 3D futómű mérés és állítás az autó stabil és biztonságos közlekedésének érdekében.
              </p>
            </div>
          </div>

          {/* Service 4 */}
          <div
            id="service-4"
            className="fade-in-up bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="h-48 bg-muted overflow-hidden">
              <img src="/images/eredet.jpg" alt="Eredetiségvizsgálat" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 sm:p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <FileCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3">Eredetiségvizsgálat</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Műszeres autódiagnosztika és hibakeresés a legmodernebb szoftverrel.
              </p>
            </div>
          </div>

          {/* Service 5 */}
          <div
            id="service-5"
            className="fade-in-up bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="h-48 bg-muted overflow-hidden">
              <img src="/images/karugy.jpg" alt="Gépjármű kárügyintézés" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 sm:p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3">Gépjármű kárügyintézés</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Biztosítási ügyintézésben nyújtunk segítséget és támogatást.
              </p>
            </div>
          </div>

          {/* Service 6 */}
          <div
            id="service-6"
            className="fade-in-up bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="h-48 bg-muted overflow-hidden">
              <img src="/images/klima.jpg" alt="Klíma töltés és tisztítás" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 sm:p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Wind className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3">Klíma töltés és tisztítás</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Autóklíma karbantartása, töltése és tisztítása professzionális berendezésekkel.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-primary text-primary-foreground">
        {/* Szlogen szekció */}
        <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw]" style={{ backgroundColor: "#BFBFBF" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center md:py-20">
            <h2
              id="slogan-title"
              className="fade-in-up text-3xl sm:text-4xl md:text-5xl font-medium mb-4"
              style={{ fontFamily: "Rubik", fontWeight: 500, fontSize: "25px", color: "#404040" }}
            >
              ÖNNEK A LEGJOBB MEGOLDÁSOKAT KÍNÁLVA
            </h2>
            <p
              id="slogan-desc"
              className="fade-in-up text-base sm:text-lg md:text-xl max-w-3xl mx-auto my-0 leading-10"
              style={{ fontFamily: "Rubik", fontWeight: 300, fontSize: "16px", color: "#404040" }}
            >
              Szolgáltatásainkkal mindig az ügyfeleink igényeire szabott megoldásokat kínálunk.
            </p>
          </div>
        </div>

        {/* Footer - Többoszlopos layout */}
        <div className="bg-primary py-16 sm:py-20 md:py-24 border-t border-primary-foreground/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-12 border-primary-foreground/10 mb-12 border-b sm:gap-36">
              {/* Bal oldal - Logó és leírás */}
              <div className="md:col-span-1 lg:col-span-1">
                <div className="mb-4">
                  <img src="/images/ewo-white.png" alt="EWO-2000" className="h-10 w-auto" />
                </div>
                <p
                  className="text-primary-foreground/80 text-sm leading-relaxed mb-4"
                  style={{ fontFamily: "Rubik", fontWeight: 300 }}
                >
                  Érden működő, teljes körű autó szervíz és karosszériajavítás 15 éves tapasztalattal.
                </p>
              </div>

              {/* Szervízek */}
              <div>
                <h4 className="font-medium text-base mb-4" style={{ fontFamily: "Rubik", fontWeight: 500 }}>
                  Szolgáltatások
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="#services"
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                      style={{ fontFamily: "Rubik", fontWeight: 300 }}
                    >
                      Szervíz
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                      style={{ fontFamily: "Rubik", fontWeight: 300 }}
                    >
                      Karosszériajavítás
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                      style={{ fontFamily: "Rubik", fontWeight: 300 }}
                    >
                      Futómű állítás
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                      style={{ fontFamily: "Rubik", fontWeight: 300 }}
                    >
                      Klíma töltés
                    </a>
                  </li>
                </ul>
              </div>

              {/* Cég információ */}
              <div>
                <h4 className="font-medium text-base mb-4" style={{ fontFamily: "Rubik", fontWeight: 500 }}>
                  Rólunk
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="#home"
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                      style={{ fontFamily: "Rubik", fontWeight: 300 }}
                    >
                      Főoldal
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                      style={{ fontFamily: "Rubik", fontWeight: 300 }}
                    >
                      Szolgáltatások
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                      style={{ fontFamily: "Rubik", fontWeight: 300 }}
                    >
                      Kapcsolat
                    </a>
                  </li>
                </ul>
              </div>

              {/* Elérhetőségek */}
              <div>
                <h4 className="font-medium text-base mb-4" style={{ fontFamily: "Rubik", fontWeight: 500 }}>
                  Elérhetőségek
                </h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <a
                      href="mailto:ewo@ewo.hu"
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                      style={{ fontFamily: "Rubik", fontWeight: 300 }}
                    >
                      ewo@ewo.hu
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <a
                      href="tel:+36233668455"
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                      style={{ fontFamily: "Rubik", fontWeight: 300 }}
                    >
                      23/366-845
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span className="text-primary-foreground/70" style={{ fontFamily: "Rubik", fontWeight: 300 }}>
                      Érd, Fehérvári út 87.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Footer bottom */}
            <div
              className="w-screen relative left-1/2 right-1/2 -mx-[50vw] -mb-16 sm:-mb-20 md:-mb-24"
              style={{ backgroundColor: "#404040" }}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <p
                  className="text-primary-foreground/80 text-sm text-center"
                  style={{ fontFamily: "Rubik", fontWeight: 300 }}
                >
                  © 2025 EWO-2000 Autó Szervíz. Minden jog fenntartva.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
