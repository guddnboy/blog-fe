import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import BlogCard from '../components/BlogCard';
import Footer from '../components/Footer';

const home = () => {
  const router = useRouter();
  const [nickname, setNickname] = useState<string | null>(null);

  const navigateTo = (path: string) => {
    router.push(path);
  };

  const logout = () => {
    localStorage.clear();
    navigateTo('/login');
  };

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    const fetchProfile = async () => {
      if (!token) {
        alert('로그인이 필요합니다.');
        router.push('/login');
        return;
      }
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API_URL}/users/profile`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('프로필을 가져오는 데 실패했습니다.');
        }
        const data = await response.json();
        setNickname(data.nickname);
      } catch (error) {
        console.error(error);
        alert('프로필을 가져오는 데 실패했습니다.');
        navigateTo('/login');
      }
    };
    fetchProfile();
  }, [setNickname, router]);

  return (
    <div className="mx-10 mt-8">
      <Header nickname={nickname ?? ''} logout={logout} navigateTo={navigateTo} />
      <section className="mt-16 flex-1">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </ul>
      </section>
      <Footer />
    </div>
  );
};

export default home;
