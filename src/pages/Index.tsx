
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import ProfileHeader from "@/components/ProfileHeader";
import ProfileStats from "@/components/ProfileStats";
import Summary from "@/components/Summary";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const profileData = {
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=200&auto=format&fit=crop",
    name: "Михаил Иванов",
    position: "Менеджер по продажам",
    company: "ТехПром",
    location: "Москва, Россия",
    birthDate: "15.03.1990",
    age: 35,
    phone: "+7 (123) 456-7890",
    email: "mikhail.ivanov@mail.com",
    website: "www.mikhail-ivanov.com",
    linkedin: "www.linkedin.com/in/mikhail-ivanov",
    skills: ["Финтех", "Big Data", "Продажи"]
  };

  const experienceItems = [
    {
      id: "1",
      company: "ТехПром",
      logo: "https://via.placeholder.com/100?text=T",
      position: "Менеджер по продажам",
      dateRange: "Апр 2021 - Настоящее время",
      skills: ["Финтех", "Big Data"]
    },
    {
      id: "2",
      company: "ИнфоТех",
      logo: "https://via.placeholder.com/100?text=I",
      position: "Специалист по продажам",
      dateRange: "Июнь 2018 - Март 2021",
      skills: ["B2B продажи", "CRM", "Анализ данных"]
    }
  ];

  const educationItems = [
    {
      id: "1",
      institution: "Московский Государственный Университет",
      logo: "https://via.placeholder.com/100?text=МГУ",
      degree: "Магистр",
      field: "Маркетинг и управление продажами",
      dateRange: "2010 - 2012"
    },
    {
      id: "2",
      institution: "Российский экономический университет",
      logo: "https://via.placeholder.com/100?text=РЭУ",
      degree: "Бакалавр",
      field: "Экономика",
      dateRange: "2006 - 2010"
    }
  ];

  const skillsData = [
    { id: "1", name: "B2B Продажи", level: 90, category: "Продажи" },
    { id: "2", name: "Управление командой", level: 85, category: "Лидерство" },
    { id: "3", name: "CRM Системы", level: 75, category: "Программное обеспечение" },
    { id: "4", name: "Анализ данных", level: 65, category: "Аналитика" },
    { id: "5", name: "Переговоры", level: 95, category: "Коммуникация" },
    { id: "6", name: "Маркетинговые стратегии", level: 80, category: "Маркетинг" }
  ];

  const achievementsData = [
    {
      id: "1",
      title: "Лучший менеджер года",
      date: "Декабрь 2023",
      description: "Награда за превышение целевых показателей продаж на 150% и привлечение 3 крупных клиентов.",
      icon: "Award"
    },
    {
      id: "2",
      title: "Сертификация по управлению продажами",
      date: "Март 2022",
      description: "Получена международная сертификация по стратегическому управлению продажами.",
      icon: "Certificate"
    },
    {
      id: "3",
      title: "Запуск нового направления продаж",
      date: "Июнь 2021",
      description: "Успешно запущено новое направление B2B продаж, достигнута рентабельность в течение 3 месяцев.",
      icon: "Rocket"
    }
  ];

  const summaryText = "Специалист по управлению продажами с более чем 10-летним опытом обучения и руководства отделами продаж. Опыт разработки и внедрения стратегий продаж на различных территориях. Нацелен на развитие команды и запуск успешных маркетинговых кампаний.";

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <ProfileHeader {...profileData} onEdit={() => console.log("Edit profile")} />
            
            <div className="mt-6">
              <Summary text={summaryText} onEdit={() => console.log("Edit summary")} />
            </div>
            
            <div className="mt-6">
              <Tabs defaultValue="experience" className="w-full">
                <TabsList className="grid grid-cols-4 mb-4">
                  <TabsTrigger value="experience" className="flex items-center gap-2">
                    <Icon name="Briefcase" size={16} />
                    <span className="hidden sm:inline">Опыт</span>
                  </TabsTrigger>
                  <TabsTrigger value="education" className="flex items-center gap-2">
                    <Icon name="GraduationCap" size={16} />
                    <span className="hidden sm:inline">Образование</span>
                  </TabsTrigger>
                  <TabsTrigger value="skills" className="flex items-center gap-2">
                    <Icon name="Lightbulb" size={16} />
                    <span className="hidden sm:inline">Навыки</span>
                  </TabsTrigger>
                  <TabsTrigger value="achievements" className="flex items-center gap-2">
                    <Icon name="Trophy" size={16} />
                    <span className="hidden sm:inline">Достижения</span>
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="experience">
                  <Experience 
                    items={experienceItems} 
                    onAdd={() => console.log("Add experience")} 
                    onEdit={(id) => console.log("Edit experience", id)} 
                  />
                </TabsContent>
                
                <TabsContent value="education">
                  <Education 
                    items={educationItems} 
                    onAdd={() => console.log("Add education")} 
                    onEdit={(id) => console.log("Edit education", id)} 
                  />
                </TabsContent>
                
                <TabsContent value="skills">
                  <Skills 
                    skills={skillsData} 
                    onAdd={() => console.log("Add skill")} 
                    onEdit={(id) => console.log("Edit skill", id)} 
                  />
                </TabsContent>
                
                <TabsContent value="achievements">
                  <Achievements 
                    items={achievementsData} 
                    onAdd={() => console.log("Add achievement")} 
                    onEdit={(id) => console.log("Edit achievement", id)} 
                  />
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          <div>
            <ProfileStats 
              completion={37.5} 
              totalEarned="$75K" 
              onEdit={() => console.log("Edit stats")} 
            />
            
            <div className="mt-6 bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Twitter лента</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="border-b pb-4 last:border-0">
                    <div className="flex gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"></div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Пользователь {i}</span>
                          <span className="text-gray-500 text-sm">@user{i}</span>
                          <span className="text-gray-500 text-xs">2ч</span>
                        </div>
                        <p className="text-gray-800 mt-1">Это тестовый твит в ленте #{i}</p>
                        <div className="flex gap-4 mt-2">
                          <button className="text-gray-500 hover:text-blue-500 flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                            </svg>
                            <span className="text-xs">4</span>
                          </button>
                          <button className="text-gray-500 hover:text-green-500 flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M7 13l5 5 5-5M7 6l5 5 5-5"></path>
                            </svg>
                            <span className="text-xs">8</span>
                          </button>
                          <button className="text-gray-500 hover:text-red-500 flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                            <span className="text-xs">12</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4" variant="outline">Показать больше</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
