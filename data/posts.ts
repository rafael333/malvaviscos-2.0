

export interface Post {
    id: number;
    user: string;
    userImg: string;
    image: string;
    caption: string;
    likes: number;
    comments?: number;
    level?: string;
    isLiked?: boolean;
    video?: string;
}

export const posts: Post[] = [



    {
        id: 4,
        user: 'Carla Repostera',
        userImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&h=600&fit=crop',
        caption: '¡Pedido de hoy listo para entregar! 🎁 #minidonas',
        likes: 142,
        comments: 24,
        level: 'Intermedio'
    },

    {
        id: 6,
        user: 'Sofía Dulces',
        userImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
        image: 'https://i.pinimg.com/736x/1a/6a/d7/1a6ad7c820cd19616e580f8901c92f46.jpg',
        caption: '¡Chicos, miren la producción de los pedidos de hoy! 😍 Quedaron demasiado lindos, ¿no? ¡Estoy enamorada! 💖🍬 #repostería #malvavisco',
        likes: 184,
        comments: 34,
        level: 'Intermedio'
    },
    {
        id: 7,
        user: 'Café & Dulzura',
        userImg: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=100&h=100&fit=crop',
        image: 'https://i.pinimg.com/736x/55/a5/8b/55a58bdb53651ee5429a3b05ca20f783.jpg',
        caption: '¡Nada mejor que un buen café acompañado de estas delicias! ☕🍬 La combinación perfecta para la tarde.',
        likes: 189,
        comments: 24,
        level: 'Experto'
    },
    {
        id: 8,
        user: 'Fiestas Mágicas',
        userImg: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop',
        image: 'https://i.pinimg.com/736x/6a/e9/80/6ae980ffe59355869b6ae5486e64760c.jpg',
        caption: '¡Mesa de dulces lista para el cumpleaños de hoy! 🎉🎂 Todo hecho con amor y las técnicas del curso. ¡A los niños les encantará!',
        likes: 165,
        comments: 89,
        level: 'Intermedio'
    },
    {
        id: 9,
        user: 'Ana Aprendiz',
        userImg: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
        image: 'https://i.pinimg.com/1200x/85/d2/08/85d208fe3ff15a739c627de0fa6249bf.jpg',
        caption: '¡Lo logré! 🙌 Miren el resultado después de ver la clase de malvaviscos. ¡Nunca pensé que me saldrían tan bien a la primera! 😍',
        likes: 98,
        comments: 45,
        level: 'Principiante'
    },
    {
        id: 10,
        user: 'Lucía Empreendedora',
        userImg: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop',
        image: 'https://i.pinimg.com/1200x/03/cf/93/03cf9388a79f6d1d0a261c0dfe9f7dfd.jpg',
        caption: '¡Gracias a las clases del curso ya tengo mi primera entrega grande! 📦✨ Feliz de ver resultados tan rápido.',
        likes: 125,
        comments: 42,
        level: 'Principiante'
    },
    {
        id: 11,
        user: 'Decoraciones Estela',
        userImg: 'https://images.unsplash.com/photo-1595769816263-9b9102c405fa?w=100&h=100&fit=crop',
        image: 'https://i.pinimg.com/1200x/d7/a2/fe/d7a2fe8db53a89bbf78bacd900388d28.jpg',
        caption: '¡Vamos a decorar una fiesta más! 🎉🍭 Los malvaviscos personalizados siempre son el centro de atención.',
        likes: 176,
        comments: 67,
        level: 'Experto'
    },
    {
        id: 12,
        user: 'Juliana Progress',
        userImg: 'https://images.unsplash.com/photo-1554151228-14d9def656ec?w=100&h=100&fit=crop',
        image: '',
        video: '/videos/evolution.mp4',
        caption: '¡Desde mi primera clase hasta hoy! 📈 La evolución es increíble. ¡Nunca dejen de practicar! 💪✨ #progreso #malvaviscos',
        likes: 195,
        comments: 115,
        level: 'Experto'
    }
];
