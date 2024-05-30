"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
        title: "Opportunités Diversifiées",
        description:
            "Accédez à une sélection triée de propositions d’emploi de haute qualité dans diverses disciplines technologiques — design, développement, DevOps et gestion de communauté. Adaptées pour correspondre à vos compétences et aspirations de carrière.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--emerald-500))] flex items-center justify-center text-white">
                Opportunités Diversifiées
            </div>
        ),
    },
    {
        title: "Apprentissage et Développement Continus",
        description:
            "Restez à la pointe de la technologie avec nos webinaires exclusifs, ateliers et sessions de formation dirigés par des experts du secteur. Élevez vos compétences et atteignez la maîtrise Zen dans votre domaine.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/linear.webp"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Plaidoyer pour le Travail à Distance",
        description:
            "Adoptez le Zen du travail à distance avec des outils et ressources qui vous aident à maintenir productivité et équilibre. Notre plateforme soutient un environnement de travail flexible qui respecte votre espace et votre temps personnels.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
                Plaidoyer pour le Travail à Distance
            </div>
        ),
    },
    {
        title: "Support Personnalisé",
        description:
            "Bénéficiez de conseils et d’un soutien de carrière personnalisés de la part de notre équipe dédiée d’experts en carrière. De la rédaction de CV à la préparation d'entretiens, nous vous guidons à chaque étape vers l’atteinte de votre Zen de carrière.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Support Personnalisé
            </div>
        ),
    },
    {
        title: "Engagement Communautaire",
        description:
            "Rejoignez une communauté dynamique de professionnels aux idées similaires. Partagez des insights, résolvez des défis et collaborez sur des projets. Nos événements communautaires et forums favorisent un environnement de soutien et enrichissant.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--red-500),var(--emerald-500))] flex items-center justify-center text-white">
                Engagement Communautaire
            </div>
        ),
    },
];
export function Features() {
    return (
        <div className="bg-[#15171F]">
            <div className="mx-auto max-w-2xl lg:text-center">
                <p className=" text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Carrières Tech chez EmploiZen : Exceller en Harmonie
                </p>
            </div>
            <StickyScroll content={content}/>
        </div>
    );
}
