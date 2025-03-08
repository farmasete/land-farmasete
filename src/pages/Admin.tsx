
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { LogOut, Settings, Users, Image, Phone, ListChecks, MessageSquareQuote } from 'lucide-react';
import AdminLogin from '@/components/AdminLogin';
import TestimonialsManager from '@/components/admin/TestimonialsManager';
import ImagesManager from '@/components/admin/ImagesManager';
import LogosManager from '@/components/admin/LogosManager';
import ContactsManager from '@/components/admin/ContactsManager';
import ServicesManager from '@/components/admin/ServicesManager';
import SettingsManager from '@/components/admin/SettingsManager';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  
  // Check if admin is already logged in
  useState(() => {
    const adminAuth = localStorage.getItem('adminAuth');
    if (adminAuth === 'true') {
      setIsAuthenticated(true);
    }
  });
  
  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    setIsAuthenticated(false);
    toast.success('Logout realizado com sucesso');
  };
  
  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('adminAuth', 'true');
  };
  
  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }
  
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-farma-800">FarmaSETE - Área Administrativa</h1>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => navigate('/')}>
              Ver Site
            </Button>
            <Button variant="destructive" size="sm" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Sair
            </Button>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="testimonials" className="w-full">
          <TabsList className="w-full justify-start mb-8 flex-wrap">
            <TabsTrigger value="testimonials" className="flex items-center">
              <MessageSquareQuote className="mr-2 h-4 w-4" />
              Depoimentos
            </TabsTrigger>
            <TabsTrigger value="images" className="flex items-center">
              <Image className="mr-2 h-4 w-4" />
              Imagens
            </TabsTrigger>
            <TabsTrigger value="logos" className="flex items-center">
              <Image className="mr-2 h-4 w-4" />
              Logotipos
            </TabsTrigger>
            <TabsTrigger value="contacts" className="flex items-center">
              <Phone className="mr-2 h-4 w-4" />
              Contatos
            </TabsTrigger>
            <TabsTrigger value="services" className="flex items-center">
              <ListChecks className="mr-2 h-4 w-4" />
              Serviços
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center">
              <Settings className="mr-2 h-4 w-4" />
              Configurações
            </TabsTrigger>
          </TabsList>
          
          <Card className="p-6">
            <TabsContent value="testimonials">
              <TestimonialsManager />
            </TabsContent>
            
            <TabsContent value="images">
              <ImagesManager />
            </TabsContent>
            
            <TabsContent value="logos">
              <LogosManager />
            </TabsContent>
            
            <TabsContent value="contacts">
              <ContactsManager />
            </TabsContent>
            
            <TabsContent value="services">
              <ServicesManager />
            </TabsContent>
            
            <TabsContent value="settings">
              <SettingsManager />
            </TabsContent>
          </Card>
        </Tabs>
      </main>
    </div>
  );
};

export default Admin;
