
import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import LessonDetails from './pages/LessonDetails';
import Profile from './pages/Profile';
import Feed from './pages/Feed';
import Favorites from './pages/Favorites';
import Login from './pages/Login';

interface User {
  name: string;
  email: string;
}

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'lesson' | 'profile' | 'feed' | 'favorites'>('home');
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  // Check localStorage for existing user on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error('Error parsing user data:', e);
        localStorage.removeItem('user');
      }
    }
  }, []);

  const handleLogin = (name: string, email: string) => {
    const userData = { name, email };
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const navigateToLesson = (id?: string) => {
    if (id) {
      setSelectedLessonId(id);
      localStorage.setItem('lastWatchedLesson', id);
    }
    setCurrentPage('lesson');
  };

  const navigateToCourses = () => {
    const lastLesson = localStorage.getItem('lastWatchedLesson');
    if (lastLesson) {
      setSelectedLessonId(lastLesson);
      setCurrentPage('lesson');
    } else {
      // Se não tiver última aula, vai para a primeira
      navigateToLesson('1');
    }
  };
  const navigateToHome = () => setCurrentPage('home');
  const navigateToProfile = () => setCurrentPage('profile');
  const navigateToFeed = () => setCurrentPage('feed');
  const navigateToFavorites = () => setCurrentPage('favorites');

  // Show login page if user is not logged in
  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="max-w-[480px] mx-auto min-h-screen bg-background-light dark:bg-background-dark relative overflow-x-hidden shadow-2xl text-[#1b120d] dark:text-white">
      {currentPage === 'home' && (
        <Home
          onLessonClick={navigateToLesson}
          onProfileClick={navigateToProfile}
          onFeedClick={navigateToFeed}
          onFavoritesClick={navigateToFavorites}
          onCoursesClick={navigateToCourses}
          userName={user.name}
        />
      )}
      {currentPage === 'lesson' && (
        <LessonDetails onBack={navigateToHome} lessonId={selectedLessonId} onCoursesClick={navigateToCourses} />
      )}
      {currentPage === 'profile' && (
        <Profile
          onBack={navigateToHome}
          onFeedClick={navigateToFeed}
          onHomeClick={navigateToHome}
          onFavoritesClick={navigateToFavorites}
        />
      )}
      {currentPage === 'feed' && (
        <Feed
          onBack={navigateToHome}
          onHomeClick={navigateToHome}
          onProfileClick={navigateToProfile}
          onFavoritesClick={navigateToFavorites}
        />
      )}
      {currentPage === 'favorites' && (
        <Favorites
          onBack={navigateToHome}
          onHomeClick={navigateToHome}
          onFeedClick={navigateToFeed}
          onProfileClick={navigateToProfile}
          onLessonClick={navigateToLesson}
        />
      )}
    </div>
  );
};

export default App;
