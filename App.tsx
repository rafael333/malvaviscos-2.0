
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

  // Check localStorage for existing user on mount and setup history
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);

        // Initialize history state if needed
        if (!window.history.state) {
          window.history.replaceState({ page: 'home' }, '');
        }
      } catch (e) {
        console.error('Error parsing user data:', e);
        localStorage.removeItem('user');
      }
    }
  }, []);

  // Handle back button (popstate)
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state) {
        const { page, lessonId } = event.state;
        setCurrentPage(page || 'home');
        if (lessonId) {
          setSelectedLessonId(lessonId);
        } else {
          setSelectedLessonId(null);
        }
      } else {
        // Fallback for initial state or empty state
        setCurrentPage('home');
        setSelectedLessonId(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleLogin = (name: string, email: string) => {
    console.log('Login attempt:', name, email);
    const userData = { name, email };

    // Set user state
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));

    // Reset history stack on login, deferred to ensure state updates first
    setTimeout(() => {
      window.history.replaceState({ page: 'home' }, '');
    }, 0);
  };

  const navigateToLesson = (id?: string) => {
    if (id) {
      setSelectedLessonId(id);
      localStorage.setItem('lastWatchedLesson', id);
      window.history.pushState({ page: 'lesson', lessonId: id }, '');
    } else {
      // If no ID provided (shouldn't happen often in this logic but for safety)
      window.history.pushState({ page: 'lesson' }, '');
    }
    setCurrentPage('lesson');
  };

  const navigateToCourses = () => {
    const lastLesson = localStorage.getItem('lastWatchedLesson');
    if (lastLesson) {
      setSelectedLessonId(lastLesson);
      setCurrentPage('lesson');
      window.history.pushState({ page: 'lesson', lessonId: lastLesson }, '');
    } else {
      // Se não tiver última aula, vai para a primeira
      navigateToLesson('1');
    }
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    window.history.pushState({ page: 'home' }, '');
  }
  const navigateToProfile = () => {
    setCurrentPage('profile');
    window.history.pushState({ page: 'profile' }, '');
  }
  const navigateToFeed = () => {
    setCurrentPage('feed');
    window.history.pushState({ page: 'feed' }, '');
  }
  const navigateToFavorites = () => {
    setCurrentPage('favorites');
    window.history.pushState({ page: 'favorites' }, '');
  }

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
        <LessonDetails
          onBack={() => window.history.back()}
          lessonId={selectedLessonId}
          onCoursesClick={navigateToCourses}
          onFavoritesClick={navigateToFavorites}
        />
      )}
      {currentPage === 'profile' && (
        <Profile
          onBack={() => window.history.back()}
          onFeedClick={navigateToFeed}
          onHomeClick={navigateToHome}
          onFavoritesClick={navigateToFavorites}
        />
      )}
      {currentPage === 'feed' && (
        <Feed
          onBack={() => window.history.back()}
          onHomeClick={navigateToHome}
          onProfileClick={navigateToProfile}
          onFavoritesClick={navigateToFavorites}
        />
      )}
      {currentPage === 'favorites' && (
        <Favorites
          onBack={() => window.history.back()}
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
