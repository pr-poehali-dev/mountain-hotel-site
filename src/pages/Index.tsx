import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    'Главная', 'О нас', 'Номера', 'Кафе', 'Сауна', 'Трансфер', 'Стоматология', 'Контакты'
  ];

  const services = [
    {
      icon: 'Hotel',
      title: 'Номера',
      description: 'Роскошные номера с панорамным видом на горы',
      image: '/img/78702248-8830-428c-8a15-5e5528eb5dc3.jpg'
    },
    {
      icon: 'Coffee',
      title: 'Кафе',
      description: 'Изысканная кухня с лучшими видами',
      image: '/img/78702248-8830-428c-8a15-5e5528eb5dc3.jpg'
    },
    {
      icon: 'Waves',
      title: 'Сауна',
      description: 'Премиум СПА-центр для полного расслабления',
      image: '/img/0a523405-ef2b-41b1-9add-cba699f1d8ef.jpg'
    },
    {
      icon: 'Car',
      title: 'Трансфер',
      description: 'VIP трансфер из любой точки',
      image: '/img/78702248-8830-428c-8a15-5e5528eb5dc3.jpg'
    },
    {
      icon: 'Heart',
      title: 'Стоматология',
      description: 'Современная стоматологическая клиника',
      image: '/img/78702248-8830-428c-8a15-5e5528eb5dc3.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-mountain-blue">ALPINE LUXURY</h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {menuItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-mountain-slate hover:text-mountain-gold transition-colors duration-200 font-medium"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Icon name={isMenuOpen ? 'X' : 'Menu'} />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2 text-mountain-slate hover:text-mountain-gold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/img/0967fabb-43a3-4818-ab3a-3df8645c690a.jpg')",
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="absolute inset-0 bg-mountain-blue/40" />
        
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <div className="animate-float">
            <Icon name="Mountain" size={80} className="mx-auto mb-6 text-mountain-gold" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            ALPINE LUXURY
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 animate-slide-up">
            Откройте для себя роскошь в самом сердце гор. Незабываемый отдых на высоте мечты.
          </p>
          <Button 
            size="lg" 
            className="bg-mountain-gold hover:bg-mountain-gold/90 text-mountain-blue font-semibold px-8 py-4 text-lg animate-slide-up"
          >
            Забронировать сейчас
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="о-нас" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mountain-blue mb-4 animate-fade-in">
              О нашем отеле
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
              Alpine Luxury — это символ роскоши и комфорта в горах. Мы создаем незабываемые впечатления для наших гостей уже более 20 лет.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-slide-up">
              <Icon name="Award" size={48} className="mx-auto mb-4 text-mountain-gold" />
              <h3 className="text-xl font-semibold text-mountain-blue mb-2">Премиум качество</h3>
              <p className="text-gray-600">5-звездочный сервис и безупречное качество во всем</p>
            </div>
            <div className="text-center animate-slide-up">
              <Icon name="MapPin" size={48} className="mx-auto mb-4 text-mountain-gold" />
              <h3 className="text-xl font-semibold text-mountain-blue mb-2">Уникальное расположение</h3>
              <p className="text-gray-600">В самом сердце альпийских красот</p>
            </div>
            <div className="text-center animate-slide-up">
              <Icon name="Users" size={48} className="mx-auto mb-4 text-mountain-gold" />
              <h3 className="text-xl font-semibold text-mountain-blue mb-2">Персональный сервис</h3>
              <p className="text-gray-600">Индивидуальный подход к каждому гостю</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="услуги" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mountain-blue mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полный спектр премиум-услуг для вашего идеального отдыха
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mountain-blue/50 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Icon name={service.icon as any} size={24} className="text-mountain-gold mr-3" />
                    <h3 className="text-xl font-semibold text-mountain-blue">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button variant="outline" className="border-mountain-gold text-mountain-gold hover:bg-mountain-gold hover:text-white">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-mountain-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Почему выбирают нас
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-slide-up">
              <div className="text-4xl font-bold text-mountain-gold mb-2">50+</div>
              <p className="text-gray-300">Роскошных номеров</p>
            </div>
            <div className="animate-slide-up">
              <div className="text-4xl font-bold text-mountain-gold mb-2">24/7</div>
              <p className="text-gray-300">Консьерж-сервис</p>
            </div>
            <div className="animate-slide-up">
              <div className="text-4xl font-bold text-mountain-gold mb-2">98%</div>
              <p className="text-gray-300">Довольных гостей</p>
            </div>
            <div className="animate-slide-up">
              <div className="text-4xl font-bold text-mountain-gold mb-2">20+</div>
              <p className="text-gray-300">Лет опыта</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="контакты" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mountain-blue mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-gray-600">
              Мы готовы ответить на все ваши вопросы
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Icon name="Phone" size={48} className="mx-auto mb-4 text-mountain-gold" />
              <h3 className="text-xl font-semibold text-mountain-blue mb-2">Телефон</h3>
              <p className="text-gray-600">+7 (800) 123-45-67</p>
            </div>
            <div className="text-center">
              <Icon name="Mail" size={48} className="mx-auto mb-4 text-mountain-gold" />
              <h3 className="text-xl font-semibold text-mountain-blue mb-2">Email</h3>
              <p className="text-gray-600">info@alpineluxury.com</p>
            </div>
            <div className="text-center">
              <Icon name="MapPin" size={48} className="mx-auto mb-4 text-mountain-gold" />
              <h3 className="text-xl font-semibold text-mountain-blue mb-2">Адрес</h3>
              <p className="text-gray-600">Альпийские вершины, 1</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-mountain-gold hover:bg-mountain-gold/90 text-mountain-blue font-semibold px-8 py-4"
            >
              Забронировать номер
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-mountain-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">ALPINE LUXURY</h3>
            <p className="text-gray-300 mb-6">
              Роскошь в каждой детали. Незабываемые впечатления в сердце гор.
            </p>
            <div className="flex justify-center space-x-6">
              <Icon name="Facebook" size={24} className="text-mountain-gold hover:text-white cursor-pointer transition-colors" />
              <Icon name="Instagram" size={24} className="text-mountain-gold hover:text-white cursor-pointer transition-colors" />
              <Icon name="Twitter" size={24} className="text-mountain-gold hover:text-white cursor-pointer transition-colors" />
            </div>
            <div className="mt-8 pt-8 border-t border-gray-600">
              <p className="text-gray-400">
                © 2024 Alpine Luxury Hotel. Все права защищены.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;