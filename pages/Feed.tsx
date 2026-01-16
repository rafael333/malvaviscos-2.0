
import React from 'react';

interface FeedProps {
  onBack: () => void;
  onHomeClick: () => void;
  onProfileClick: () => void;
  onFavoritesClick: () => void;
}

const Feed: React.FC<FeedProps> = ({ onBack, onHomeClick, onProfileClick, onFavoritesClick }) => {
  const posts = [
    {
      id: 1,
      user: 'Bia Cake',
      userImg: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyRVxYBPrp48xkCBS2BwJUHedT1ILGgsu72NashEPUaHZohXF31vi_19CAhGZPH_18e61U6pZhPbdtyBeYhvK2hNLOV21Dagews4J_F3cAwltt6GCTgHVvp3pEEK8b8LzVtaNDOxbKVJ34tOexDlVq7jg--3MrvbqazHqqWn1HTnt1Ma5HdZIWXe_A5SBdNZezS8Z2fQNnYJHFsOx0My-6VrrEsJCdoXShRr5C31lpbub07QiINuAKMGyhQPSDjumd64UltqtfnWR',
      caption: 'Olhem meus s\'mores de hoje! Ficaram perfeitos.',
      likes: 245,
    },
    {
      id: 2,
      user: 'Chef Lucas',
      userImg: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAk76o6YFnhXhdeIgRbB4x1UOdjMcWtp6T4Y82DDhBgDGvFTtY8BImlSJ_6AQwIQ1TnjSeopiofklAWJUgczuTm-b5lvwxvXfmKhesUWdronw5R2E7LtCIXj5Yw7lIDM46joUavd6m-VllPY_i3NEZWeOFmONhy4wXkracf5nLooXthW4Izv0MGDK3KjUAAyosSZAzpUvPd-dWf5FO2stYKBgaglg_BpRaV_4nfF8_J8WmGizXfo-498xT_X-vBLmjVqy05VYS_JOrG',
      caption: 'A textura desse merengue está de outro mundo.',
      likes: 512,
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark pb-32">
      <header className="flex items-center p-4 justify-between sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <button onClick={onBack} className="text-primary size-10 flex items-center justify-center cursor-pointer">
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <h2 className="text-[#1b120d] dark:text-white text-lg font-bold">Feed da Comunidade</h2>
        <button className="text-[#1b120d] dark:text-white size-10 flex items-center justify-center">
          <span className="material-symbols-outlined">add_a_photo</span>
        </button>
      </header>

      <div className="flex flex-col gap-6 px-4 pt-4 text-[#1b120d] dark:text-white">
        {posts.map(post => (
          <div key={post.id} className="bg-white dark:bg-white/5 rounded-2xl overflow-hidden shadow-sm border border-black/5">
            <div className="flex items-center gap-3 p-4">
              <img src={post.userImg} className="size-10 rounded-full border border-primary/20" alt="" />
              <div>
                <p className="text-sm font-bold text-[#1b120d] dark:text-white">{post.user}</p>
                <p className="text-[10px] text-[#9a664c] dark:text-white/40 uppercase tracking-widest font-bold">Iniciante</p>
              </div>
            </div>
            <img src={post.image} className="w-full aspect-square object-cover" alt="" />
            <div className="p-4">
              <div className="flex items-center gap-4 mb-3">
                <button onClick={onFavoritesClick} className="flex items-center gap-1 text-primary">
                  <span className="material-symbols-outlined fill-icon">favorite</span>
                  <span className="text-xs font-bold">{post.likes}</span>
                </button>
                <button className="flex items-center gap-1 text-[#9a664c] dark:text-white/40">
                  <span className="material-symbols-outlined">chat_bubble</span>
                  <span className="text-xs font-bold">12</span>
                </button>
                <button className="ml-auto text-[#9a664c] dark:text-white/40">
                  <span className="material-symbols-outlined">bookmark</span>
                </button>
              </div>
              <p className="text-sm text-[#1b120d] dark:text-white leading-relaxed">
                <span className="font-bold mr-2">{post.user}</span>
                {post.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-white/90 dark:bg-[#1b120d]/90 backdrop-blur-xl shadow-2xl rounded-full px-6 py-3 border border-black/5 flex items-center justify-between z-50">
        <button onClick={onHomeClick} className="flex flex-col items-center gap-1 text-[#9a664c] dark:text-white/40 cursor-pointer hover:text-primary transition-all active:scale-90">
          <span className="material-symbols-outlined">home</span>
          <span className="text-[10px] font-bold">Inicio</span>
        </button>

        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex flex-col items-center gap-1 text-primary cursor-pointer scale-110 transition-transform duration-300">
          <span className="material-symbols-outlined fill-icon">dynamic_feed</span>
          <span className="text-[10px] font-bold">Feed</span>
        </button>
        <button onClick={onFavoritesClick} className="flex flex-col items-center gap-1 text-[#9a664c] dark:text-white/40 cursor-pointer hover:text-primary transition-all active:scale-90">
          <span className="material-symbols-outlined">favorite</span>
          <span className="text-[10px] font-bold">Contenido</span>
        </button>
        <button onClick={onProfileClick} className="flex flex-col items-center gap-1 text-[#9a664c] dark:text-white/40 cursor-pointer hover:text-primary transition-all active:scale-90">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[10px] font-bold">Perfil</span>
        </button>
      </nav>
    </div>
  );
};

export default Feed;
