
import React from 'react';

interface FavoritesProps {
  onBack: () => void;
  onHomeClick: () => void;
  onFeedClick: () => void;
  onProfileClick: () => void;
  onLessonClick: () => void;
}

const Favorites: React.FC<FavoritesProps> = ({ onBack, onHomeClick, onFeedClick, onProfileClick, onLessonClick }) => {
  const favorites = [
    {
      id: 'f1',
      title: 'Marshmallow de Framboesa',
      category: 'Gourmet',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwFlUUkZTzAurQbZJCQ-W5VJCEAVEMwS6UcaHgS753mGzhv17nqTMSFQdnnzbesaJPTvPYFLQybVYds1PjCMeOVpWbUAiLCNPTXYQM5_W2ELJ3Z7ni896BlaKavZipXFfrFLSu_wPLukmLN51hnPNvTKKlNra8EZFuFHFqdpsjV5x1RX1XFTaC0VYz6QL6sBnbYYeFduEXQzMFD5zHN2lHcb1Su9_b0912BPKVIm3D3Zoz1PzKj_dIAmhd50lu-twdF6gl2f1KTtsC'
    },
    {
      id: 'f2',
      title: 'Decoração em Nuvem',
      category: 'Técnica',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAk76o6YFnhXhdeIgRbB4x1UOdjMcWtp6T4Y82DDhBgDGvFTtY8BImlSJ_6AQwIQ1TnjSeopiofklAWJUgczuTm-b5lvwxvXfmKhesUWdronw5R2E7LtCIXj5Yw7lIDM46joUavd6m-VllPY_i3NEZWeOFmONhy4wXkracf5nLooXthW4Izv0MGDK3KjUAAyosSZAzpUvPd-dWf5FO2stYKBgaglg_BpRaV_4nfF8_J8WmGizXfo-498xT_X-vBLmjVqy05VYS_JOrG'
    },
    {
      id: 'f3',
      title: 'S\'mores Salted Caramel',
      category: 'Sobremesa',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyRVxYBPrp48xkCBS2BwJUHedT1ILGgsu72NashEPUaHZohXF31viy_19CAhGZPH_18e61U6pZhPbdtyBeYhvK2hNLOV21Dagews4J_F3cAwltt6GCTgHVvp3pEEK8b8LzVtaNDOxbKVJ34tOexDlVq7jg--3MrvbqazHqqWn1HTnt1Ma5HdZIWXe_A5SBdNZezS8Z2fQNnYJHFsOx0My-6VrrEsJCdoXShRr5C31lpbub07QiINuAKMGyhQPSDjumd64UltqtfnWR'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark pb-32">
      <header className="flex items-center p-4 justify-between sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <button onClick={onBack} className="text-primary size-10 flex items-center justify-center cursor-pointer">
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <h2 className="text-[#1b120d] dark:text-white text-lg font-bold">Meus Favoritos</h2>
        <div className="w-10"></div>
      </header>

      <div className="px-4 py-4">
        <div className="bg-marshmallow-pink/30 dark:bg-primary/5 p-6 rounded-3xl border border-primary/10 mb-6 text-center">
            <span className="material-symbols-outlined text-primary text-5xl mb-2 fill-icon">favorite</span>
            <h3 className="text-lg font-black text-[#1b120d] dark:text-white">Sua Coleção Doce</h3>
            <p className="text-sm text-[#9a664c] dark:text-white/60">Tudo o que você amou em um só lugar.</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {favorites.map(item => (
            <div 
              key={item.id} 
              onClick={onLessonClick}
              className="bg-white dark:bg-white/5 rounded-2xl overflow-hidden border border-black/5 shadow-sm active:scale-95 transition-transform cursor-pointer"
            >
              <div 
                className="w-full aspect-square bg-cover bg-center" 
                style={{ backgroundImage: `url("${item.image}")` }}
              >
                <div className="p-2 text-right">
                    <span className="material-symbols-outlined text-primary fill-icon text-xl bg-white/80 dark:bg-black/40 rounded-full p-1 shadow-sm">favorite</span>
                </div>
              </div>
              <div className="p-3">
                <p className="text-[10px] font-bold text-primary uppercase tracking-widest">{item.category}</p>
                <h4 className="text-xs font-bold text-[#1b120d] dark:text-white leading-tight mt-0.5">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
        
        {favorites.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 opacity-40">
            <span className="material-symbols-outlined text-6xl">favorite_border</span>
            <p className="text-sm font-bold mt-4">Nenhum favorito ainda</p>
          </div>
        )}
      </div>

      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-white/90 dark:bg-[#1b120d]/90 backdrop-blur-xl shadow-2xl rounded-full px-6 py-3 border border-black/5 flex items-center justify-between z-50">
        <button onClick={onHomeClick} className="flex flex-col items-center gap-1 text-[#9a664c] dark:text-white/40 cursor-pointer hover:text-primary transition-all active:scale-90">
          <span className="material-symbols-outlined">home</span>
          <span className="text-[10px] font-bold">Início</span>
        </button>
        <button onClick={onHomeClick} className="flex flex-col items-center gap-1 text-[#9a664c] dark:text-white/40 cursor-pointer hover:text-primary transition-all active:scale-90">
          <span className="material-symbols-outlined">menu_book</span>
          <span className="text-[10px) font-bold">Cursos</span>
        </button>
        <button onClick={onFeedClick} className="flex flex-col items-center gap-1 text-[#9a664c] dark:text-white/40 cursor-pointer hover:text-primary transition-all active:scale-90">
          <span className="material-symbols-outlined">dynamic_feed</span>
          <span className="text-[10px] font-bold">Feed</span>
        </button>
        <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="flex flex-col items-center gap-1 text-primary cursor-pointer scale-110 transition-transform duration-300">
          <span className="material-symbols-outlined fill-icon">favorite</span>
          <span className="text-[10px] font-bold">Favoritos</span>
        </button>
        <button onClick={onProfileClick} className="flex flex-col items-center gap-1 text-[#9a664c] dark:text-white/40 cursor-pointer hover:text-primary transition-all active:scale-90">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[10px] font-bold">Perfil</span>
        </button>
      </nav>
    </div>
  );
};

export default Favorites;
