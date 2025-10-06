// E2-Care Landing Page Content v4 - Complete Bilingual Content
export const content = {
  en: {
    header: {
      nav: {
        solutions: "Solutions",
        howItWorks: "How it works",
        feedbacks: "Feedbacks", 
        partners: "Partners",
        faq: "FAQ",
        contact: "Contact"
      }
    },
    hero: {
      title: "Connected care that brings peace of mind to families and better service to caregivers.",
      subtitle: "From activity sensors to smart watches and voice-AI support — E2-Care connects people, data, and care.",
      bookDemo: "Book a Demo",
      downloadPdf: "Download PDF"
    },
    solutions: {
      title: "Our Connected Care Solutions",
      subtitle: "Comprehensive monitoring and care solutions designed for peace of mind",
      cards: [
        {
          id: "e2-care",
          title: "E2-Care",
          description: "Detect deviations early. No cameras. 15-min install.",
          link: "/solutions/e2-care",
          learnMore: "Learn more"
        },
        {
          id: "e2-temp-humidity",
          title: "E2-Temp & Humidity", 
          description: "Calibrated monitoring with audit-ready logs.",
          link: "/solutions/e2-temp-humidity",
          learnMore: "Learn more"
        },
        {
          id: "e2-supply-chain",
          title: "E2-Supply Chain",
          description: "Temperature + GPS with store-and-forward.",
          link: "/solutions/e2-supply-chain", 
          learnMore: "Learn more"
        },
        {
          id: "e2-asset-tracking",
          title: "E2-Asset Tracking",
          description: "Find critical assets fast. Improve utilization.",
          link: "/solutions/e2-asset-tracking",
          learnMore: "Learn more"
        },
        {
          id: "integrators",
          title: "E2-Integrators & Local Partners", 
          description: "Deploy E2 in your region (Partner & JV). White-label dashboard, API access, training, shared revenue.",
          link: "/solutions/integrators",
          learnMore: "Learn more"
        }
      ]
    },
    howItWorks: {
      title: "How E2-Care Works",
      description: "Install the sensors in a few minutes → data appears live in your dashboard → our **AI layer** handles the rest: trend detection (health risk patterns), fall-down alerts, medication reminders, and smart communication with caregivers and family."
    },
    compliance: {
      title: "Compliance & Security",
      bullets: [
        "GDPR compliant (EU hosting)",
        "GxP best practices (audit-ready logs)",
        "Role-based access (healthcare-grade security)"
      ]
    },
    stories: {
      title: "Customer Success Stories", 
      cases: [
        {
          title: "Airport LT",
          description: "Reduced false alarms by 40% while improving passenger safety monitoring at Vilnius International Airport."
        },
        {
          title: "Pharmacies LV",
          description: "Automated temperature compliance across 50+ pharmacy locations, saving 2 hours daily per store."
        },
        {
          title: "Cities LV", 
          description: "Smart city infrastructure monitoring covering 15,000+ residents with 99.8% uptime reliability."
        },
        {
          title: "Schools",
          description: "Enhanced student safety protocols while maintaining privacy standards across multiple educational facilities."
        },
        {
          title: "UK Wearables",
          description: "Integrated smartwatch data for 500+ elderly care residents, reducing emergency response time by 60%."
        },
        {
          title: "France Flats",
          description: "Deployed in 200+ senior living apartments with 95% user satisfaction and family peace of mind."
        },
        {
          title: "BG→FR Cold-chain",
          description: "Cross-border pharmaceutical logistics with real-time temperature monitoring and compliance reporting."
        }
      ]
    },
    integrators: {
      title: "Integrators & Local Partners",
      description: "Join the E2 Partner Program (integrators & JV). Local brand ownership, revenue sharing, white-label dashboard and apps, API & support, early pilots.",
      tableData: [
        {
          region: "Baltics",
          model: "JV", 
          responsibilities: "Sales, local install, L1 support",
          e2Provides: "Platform, APIs, L2/L3 support, marketing kit",
          revenueShare: "30–50%"
        },
        {
          region: "France",
          model: "Integrator",
          responsibilities: "Presales, deployment", 
          e2Provides: "SaaS, training, white-label assets",
          revenueShare: "25–40%"
        },
        {
          region: "DACH",
          model: "JV",
          responsibilities: "Bizdev, ops, SLAs",
          e2Provides: "Hardware supply, platform, partner portal",
          revenueShare: "30–50%"
        }
      ],
      bookMeeting: "Book a Meeting",
      applyPartner: "Apply as Partner"
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "How quickly can E2-Care be deployed?",
          answer: "Installation takes 15 minutes per location. The system is live immediately, with full dashboard access and AI analysis within 24 hours."
        },
        {
          question: "What makes E2-Care different from other monitoring systems?",
          answer: "E2-Care combines privacy-first design (no cameras), AI-powered health trend analysis, and seamless integration with existing care workflows. Our European hosting ensures GDPR compliance."
        },
        {
          question: "Can E2-Care integrate with existing healthcare systems?", 
          answer: "Yes, we provide REST APIs and standard healthcare integrations (HL7, FHIR). Our team supports custom integrations for enterprise clients."
        },
        {
          question: "What support is available for partners?",
          answer: "Partners receive comprehensive training, white-label resources, technical documentation, and dedicated support channels. Revenue sharing ranges from 25-50% depending on the partnership model."
        },
        {
          question: "Is the data secure and compliant?",
          answer: "Absolutely. E2-Care is GDPR compliant with EU-hosted infrastructure, implements healthcare-grade security (role-based access), and follows GxP best practices with audit-ready logging."
        },
        {
          question: "How does the AI analysis work?",
          answer: "Our AI layer continuously analyzes sensor data to detect patterns, predict health risks, identify fall incidents, and send smart alerts to caregivers and family members while respecting privacy boundaries."
        }
      ]
    },
    contact: {
      title: "Get Started Today",
      subtitle: "Ready to transform care delivery? Contact us for a personalized demo.",
      form: {
        name: "Full Name",
        email: "Email Address", 
        company: "Company/Organization",
        message: "How can we help you?",
        submit: "Send Message"
      }
    },
    footer: {
      company: "E2 Technologies OÜ — Tallinn, Estonia",
      contact: "contact@e2.dev | www.e2.dev | WhatsApp available on request",
      integrators: "For Integrators / Partners"
    }
  },
  fr: {
    header: {
      nav: {
        solutions: "Solutions", 
        howItWorks: "Comment ça marche",
        feedbacks: "Témoignages",
        partners: "Partenaires",
        faq: "FAQ",
        contact: "Contact"
      }
    },
    hero: {
      title: "Un care connecté qui apporte la tranquillité d'esprit aux familles et un meilleur service aux aidants.",
      subtitle: "Des capteurs d'activité aux montres connectées et à l'assistance vocale — E2-Care relie les personnes, les données et le care.",
      bookDemo: "Réserver une démo",
      downloadPdf: "Télécharger le 1-pager"
    },
    solutions: {
      title: "Nos Solutions de Care Connecté",
      subtitle: "Solutions complètes de monitoring et de care conçues pour la tranquillité d'esprit",
      cards: [
        {
          id: "e2-care",
          title: "E2-Care",
          description: "Détecter les déviations tôt. Pas de caméras. Installation en 15 min.",
          link: "/solutions/e2-care",
          learnMore: "En savoir plus"
        },
        {
          id: "e2-temp-humidity",
          title: "E2-Temp & Humidité",
          description: "Monitoring calibré avec journaux auditables.",
          link: "/solutions/e2-temp-humidity", 
          learnMore: "En savoir plus"
        },
        {
          id: "e2-supply-chain",
          title: "E2-Supply Chain",
          description: "Température + GPS avec store-and-forward.",
          link: "/solutions/e2-supply-chain",
          learnMore: "En savoir plus"
        },
        {
          id: "e2-asset-tracking",
          title: "E2-Asset Tracking", 
          description: "Trouvez les actifs critiques rapidement. Améliorez l'utilisation.",
          link: "/solutions/e2-asset-tracking",
          learnMore: "En savoir plus"
        },
        {
          id: "integrators",
          title: "E2-Intégrateurs & Partenaires Locaux",
          description: "Déployez E2 dans votre région (Partenaire & JV). Dashboard marque blanche, accès API, formation, revenus partagés.",
          link: "/solutions/integrators",
          learnMore: "En savoir plus"
        }
      ]
    },
    howItWorks: {
      title: "Comment E2-Care Fonctionne",
      description: "Installez les capteurs en quelques minutes → les données apparaissent en direct sur votre tableau de bord → notre **couche d'IA** fait le reste : détection de tendances (risques santé), alertes chutes, rappels (prise de pilules) et communication intelligente avec les aidants et la famille."
    },
    compliance: {
      title: "Conformité & Sécurité", 
      bullets: [
        "Conforme RGPD (hébergement UE)",
        "Bonnes pratiques GxP (journaux auditables)",
        "Accès par rôles (sécurité healthcare)"
      ]
    },
    stories: {
      title: "Témoignages de Succès Client",
      cases: [
        {
          title: "Aéroport LT",
          description: "Réduction de 40% des fausses alarmes tout en améliorant la surveillance de la sécurité des passagers à l'aéroport international de Vilnius."
        },
        {
          title: "Pharmacies LV",
          description: "Conformité automatisée des températures dans 50+ pharmacies, économisant 2h quotidiennes par magasin."
        },
        {
          title: "Villes LV",
          description: "Monitoring d'infrastructure smart city couvrant 15 000+ résidents avec 99,8% de fiabilité de disponibilité."
        },
        {
          title: "Écoles", 
          description: "Protocoles de sécurité étudiante améliorés tout en maintenant les standards de confidentialité dans plusieurs établissements éducatifs."
        },
        {
          title: "Wearables UK",
          description: "Données de montres connectées intégrées pour 500+ résidents en soins aux personnes âgées, réduisant le temps de réponse d'urgence de 60%."
        },
        {
          title: "Appartements France",
          description: "Déployé dans 200+ appartements pour personnes âgées avec 95% de satisfaction utilisateur et tranquillité d'esprit familiale."
        },
        {
          title: "Chaîne du froid BG→FR",
          description: "Logistique pharmaceutique transfrontalière avec monitoring de température en temps réel et rapports de conformité."
        }
      ]
    },
    integrators: {
      title: "Intégrateurs & Partenaires Locaux",
      description: "Rejoignez le programme partenaires E2 (intégrateurs & JV). Propriété locale, partage de revenus, dashboard & apps marque blanche, API & support, pilotes en avant-première.",
      tableData: [
        {
          region: "Baltiques",
          model: "JV",
          responsibilities: "Ventes, install local, support L1", 
          e2Provides: "Plateforme, APIs, support L2/L3, kit marketing",
          revenueShare: "30–50%"
        },
        {
          region: "France",
          model: "Intégrateur",
          responsibilities: "Préventes, déploiement",
          e2Provides: "SaaS, formation, actifs marque blanche",
          revenueShare: "25–40%"
        },
        {
          region: "DACH", 
          model: "JV",
          responsibilities: "Bizdev, ops, SLAs",
          e2Provides: "Fourniture hardware, plateforme, portail partenaire",
          revenueShare: "30–50%"
        }
      ],
      bookMeeting: "Réserver un rendez-vous",
      applyPartner: "Devenir partenaire"
    },
    faq: {
      title: "Questions Fréquemment Posées",
      items: [
        {
          question: "À quelle vitesse E2-Care peut-il être déployé ?",
          answer: "L'installation prend 15 minutes par emplacement. Le système est actif immédiatement, avec accès complet au tableau de bord et analyse IA dans les 24 heures."
        },
        {
          question: "Qu'est-ce qui différencie E2-Care des autres systèmes de monitoring ?",
          answer: "E2-Care combine conception respectueuse de la vie privée (pas de caméras), analyse de tendances de santé alimentée par IA, et intégration transparente avec les flux de travail de care existants. Notre hébergement européen assure la conformité RGPD."
        },
        {
          question: "E2-Care peut-il s'intégrer aux systèmes healthcare existants ?", 
          answer: "Oui, nous fournissons des APIs REST et intégrations healthcare standard (HL7, FHIR). Notre équipe supporte les intégrations personnalisées pour les clients entreprise."
        },
        {
          question: "Quel support est disponible pour les partenaires ?",
          answer: "Les partenaires reçoivent formation complète, ressources marque blanche, documentation technique, et canaux de support dédiés. Le partage de revenus va de 25-50% selon le modèle de partenariat."
        },
        {
          question: "Les données sont-elles sécurisées et conformes ?",
          answer: "Absolument. E2-Care est conforme RGPD avec infrastructure hébergée UE, implémente sécurité niveau healthcare (accès par rôles), et suit les meilleures pratiques GxP avec journalisation auditable."
        },
        {
          question: "Comment fonctionne l'analyse IA ?",
          answer: "Notre couche IA analyse continuellement les données de capteurs pour détecter les motifs, prédire les risques santé, identifier les incidents de chute, et envoyer des alertes intelligentes aux aidants et membres de famille tout en respectant les limites de confidentialité."
        }
      ]
    },
    contact: {
      title: "Commencez Aujourd'hui",
      subtitle: "Prêt à transformer la livraison de care ? Contactez-nous pour une démo personnalisée.",
      form: {
        name: "Nom Complet", 
        email: "Adresse Email",
        company: "Entreprise/Organisation",
        message: "Comment pouvons-nous vous aider ?",
        submit: "Envoyer le Message"
      }
    },
    footer: {
      company: "E2 Technologies OÜ — Tallinn, Estonie",
      contact: "contact@e2.dev | www.e2.dev | WhatsApp disponible sur demande",
      integrators: "Pour Intégrateurs / Partenaires"
    }
  }
};