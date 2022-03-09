import Img2 from '../assets/Img2.png';
import Img3 from '../assets/Img3.png';
import Img4 from '../assets/Img4.png';
import Img5 from '../assets/Img5.png';
import Img6 from '../assets/Img6.png';
import Img7 from '../assets/Img7.png';
import Img8 from '../assets/Img8.png';


export const FAKE_DB = {
    hero: {
        name: "Mikel Azqueta",
        profession: "SAP Consultant & Front-End Developer",
        mobile: '628 90 27 80',
        email: 'azquetamikel@gmail.com'
    },
    curriculumSections:{
        formacion: [
            {
                title: "BootCamp Programación Front-End Developer",
                center: "Upgrade-Hub",
                year: "2021-2022",
                description: "BootCamp enfocado al aprendizaje de tecnologías de programación:"
                             + " JavaScript, Angular, React, "
                             + " HTML/SCSS"
            },
            {
                title: "Master Programación ABAP y Consultoria Funcional SAP",
                center: "Camara de Comercio Navarra",
                year: "2017-2018",
                description: "Master Oficial de SAP en los módulos: "
                             +"SAP HCM R/3"
                             +"Programación ABAP"
            },
            {
                title: "Doble Grado en Economia Internacional y ADE",
                center: "Universidad Pública de Navarra",
                year: "2012-2016",
                description: "Programa Internacional Martin de Rada - Taiwán"
                            +" Especialidad Auditoria y contabilidad"

            },
            {
                title: "Diplomatura en Ciencias Empresariales",
                center: "Universidad Pública de Navarra",
                year: "2009-2012",
                description: "Programa Erasmus - Irlanda"
                            
            }
        ],
        certificaciones: [
            {
                title: "Advanced Certificate in English - C1",
                center: "Cambridge University",
                year: "2014",
                description: "Certificado de Inglés - Nivel Avanzado"
            },
            {
                title: "Curso SAPUI5 Avanzado",
                center: "Logali Group",
                year: "2020",
                description: "Curso Programación SAPUI5 Front-End"
            },
            {
                title: "Curso ABAP Orientado a Objetos",
                center: "Logali Group",
                year: "2021",
                description: "Curso ABAP Programación Orientada a Objetos"
            }
        
        ],
        experience: [
            {
                title: "Consultor SAP HXM",
                center: "Oreka Information Technologies",
                localidad: [
                    'Vitoria', 'Pamplona', 'Madrid'
                ],
                year: "2018-Actualidad",
                description: "Consultoría Funcional y técnica orientada a los módulos SAP HCM S/4, SuccessFactors y ABAP orientado a HCM"
            },
            {
                title: "Auditor Junior",
                center: "Deloitte S.L",
                localidad: ['Pamplona'],
                year: "2016-2017",
                description: "Auditoria Financiera y Contabilidad"
            },
            {
                title: "Administrativo",
                center: "Alimentos Congelados Barcos, S.L",
                localidad: ['Peralta'],
                year: "2015-2015",
                description: "Contabilidad"
            }
    
        ]
    },
    portfolio: [
        {
            url: Img2,
            alt: "PokemonArena",
            desc: "Juego clásico de batallas pokemon hecho con Javascript. Escoge tu Pokemon y lucha contra la máquina"
        },
        {
            url: Img3,
            alt: "Wack-A-Mario",
            desc: "Golpea a Mario cada vez que se asoma por una tubería y suma la mayor puntuación posible"
        },
        {
            url: Img4,
            alt: "Shopping Games",
            desc: "Tienda de Videojuego virtual consumiendo datos de una API de videojuegos real"
        },
        {
            url: Img5,
            alt: "Nintendo Grid",
            desc: "Aplicacion Nintendo hecha con Grid"
        }
        ,
        {
            url: Img6,
            alt: "PokeApi",
            desc: "Consulta las características básicas de tus pokemon favoritos"
        },
        {
            url: Img7,
            alt: "WishList",
            desc: "Wishlist para añadir títulos de videojuegos a tu lista de preferencias"
        },
        {
            url: Img8,
            alt: "Calculadora",
            desc: "calculadora JavaScript para realizar operaciones matematicas simples"
        }
    
    ]
}