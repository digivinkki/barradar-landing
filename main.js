
const I18N = {
  en: {
    hero_title_1: "Get More Paying Customers",
    hero_title_2: "For Free",
    hero_sub: "Join the first 10–15 bars before launch. No contracts. No fees. Zero risk.",
    b1: "Reach nearby customers automatically",
    b2: "Only pay the wholesale cost of a prize drink",
    b3: "We handle everything — you do nothing",
    cta_btn: "Secure your spot — FOR FREE!",
    scarcity: "Only 15 early partner spots available",
    trust: "You submit the form → I contact you → I visit your bar and set it up. Completely risk-free for you.",
    mock_caption: "Example: Bar Malaga • Wheel + Map preview",
    contact_title: "Interested? I’ll Visit Your Bar Personally.",
    contact_sub: "Fill out the form and I’ll contact you directly to show how it works. Completely risk-free for you.",
    f_bar: "Bar name",
    f_name: "Your name",
    f_phone: "Phone",
    f_email: "Email (optional)",
    f_msg: "Message (optional)",
    send: "Send",
    note: "Or email: info@barradarrewards.com • Call: +358 40 776 1589",
    c1_t: "Appear first to nearby users",
    c1_b: "Your bar is shown based on user location — closest options first.",
    c2_t: "Drive traffic with Wheel of Fortune",
    c2_b: "Guests visit to spin — you only cover the wholesale cost of the prize.",
    c3_t: "Bring customers back with digital stamp cards",
    c3_b: "Collect stamps → unlock rewards → repeat visits.",
    backtop: "Back to top"
  },
  es: {
    hero_title_1: "Consigue más clientes de pago",
    hero_title_2: "Gratis",
    hero_sub: "Únete a los primeros 10–15 bares antes del lanzamiento. Sin contratos. Sin cuotas. Cero riesgo.",
    b1: "Llega automáticamente a clientes cercanos",
    b2: "Solo pagas el coste mayorista de la bebida premio",
    b3: "Nos encargamos de todo — tú no haces nada",
    cta_btn: "Reserva tu plaza — ¡GRATIS!",
    scarcity: "Solo 15 plazas disponibles para socios early partner",
    trust: "Rellenas el formulario → te contacto → visito tu bar y lo configuro. Totalmente sin riesgo.",
    mock_caption: "Ejemplo: Bar Málaga • Vista rueda + mapa",
    contact_title: "¿Te interesa? Visito tu bar personalmente.",
    contact_sub: "Rellena el formulario y te contactaré para enseñarte lo fácil que es. Totalmente sin riesgo.",
    f_bar: "Nombre del bar",
    f_name: "Tu nombre",
    f_phone: "Teléfono",
    f_email: "Email (opcional)",
    f_msg: "Mensaje (opcional)",
    send: "Enviar",
    note: "O email: info@barradarrewards.com • Tel: +358 40 776 1589",
    c1_t: "Aparece primero para usuarios cercanos",
    c1_b: "Tu bar se muestra según la ubicación — los más cercanos primero.",
    c2_t: "Atrae visitas con la Ruleta de la Fortuna",
    c2_b: "Los clientes vienen a girar — tú solo cubres el coste mayorista del premio.",
    c3_t: "Haz que vuelvan con tarjetas de sellos",
    c3_b: "Sellos → recompensa → visitas repetidas.",
    backtop: "Volver arriba"
  },
  fi: {
    hero_title_1: "Hanki lisää maksavia asiakkaita",
    hero_title_2: "ilmaiseksi",
    hero_sub: "Liity ensimmäisten 10–15 baarin joukkoon ennen launchia. Ei sopimuksia. Ei maksuja. Nolla riskiä.",
    b1: "Tavoita lähialueen asiakkaat automaattisesti",
    b2: "Maksat vain palkintojuoman sisäänostohinnan",
    b3: "Me hoidamme kaiken — sinä et tee mitään",
    cta_btn: "Varaa paikkasi — ILMAISEKSI!",
    scarcity: "Vain 15 early partner -paikkaa saatavilla",
    trust: "Täytät lomakkeen → otan yhteyttä → tulen paikan päälle ja hoidan käyttöönoton. Täysin riskitön.",
    mock_caption: "Esimerkki: Bar Malaga • Wheel + kartta",
    contact_title: "Kiinnostaako? Tulen paikan päälle.",
    contact_sub: "Täytä lomake ja otan yhteyttä. Näytän miten tämä toimii — täysin riskitön sinulle.",
    f_bar: "Baarin nimi",
    f_name: "Nimesi",
    f_phone: "Puhelin",
    f_email: "Sähköposti (valinnainen)",
    f_msg: "Viesti (valinnainen)",
    send: "Lähetä",
    note: "Tai email: info@barradarrewards.com • Puh: +358 40 776 1589",
    c1_t: "Näy ensimmäisenä lähellä oleville",
    c1_b: "Baari näkyy sijainnin perusteella — lähimmät ensin.",
    c2_t: "Lisää kävijöitä Wheel of Fortunella",
    c2_b: "Asiakkaat tulevat pyöräyttämään — sinä maksat vain sisäänoston.",
    c3_t: "Sitouta leimakortilla",
    c3_b: "Leimat → palkinto → uusintakäynnit.",
    backtop: "Takaisin ylös"
  }
};

function setLang(lang){
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const k = el.getAttribute("data-i18n");
    const v = I18N?.[lang]?.[k];
    if (v) el.textContent = v;
  });
  document.querySelectorAll(".lang__btn").forEach(b=>{
    b.classList.toggle("is-active", b.dataset.lang === lang);
  });
  localStorage.setItem("br_lang", lang);
}

document.querySelectorAll(".lang__btn").forEach(btn=>{
  btn.addEventListener("click", ()=> setLang(btn.dataset.lang));
});

const saved = localStorage.getItem("br_lang") || "en";
setLang(saved);

const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();
