
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Plus, Pencil, Trash, PlusCircle, Minus } from 'lucide-react';

// Define a type for service items
interface ServiceItem {
  id: number;
  name: string;
  icon: string;
  image: string;
  description: string;
  items: string[];
}

const ServicesManager = () => {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [editingService, setEditingService] = useState<ServiceItem | null>(null);
  const [name, setName] = useState('');
  const [icon, setIcon] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState('');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  
  // Load services from localStorage or use default
  useEffect(() => {
    const storedServices = localStorage.getItem('services');
    if (storedServices) {
      setServices(JSON.parse(storedServices));
    } else {
      // Default services
      const defaultServices = [
        {
          id: 1,
          name: 'Dermatológicos',
          icon: 'Droplet',
          image: "/src/assets/dermatologicos.jpg",
          description: 'Formulações personalizadas para o tratamento de diversos problemas de pele, desde acne até dermatites, com concentrações ajustadas às necessidades individuais.',
          items: [
            'Cremes anti-aging',
            'Tratamentos para acne',
            'Hidratantes específicos',
            'Produtos para manchas',
            'Soluções para rosácea'
          ]
        },
        {
          id: 2,
          name: 'Alopatia',
          icon: 'Pill',
          image: "/src/assets/alopatia.jpg",
          description: 'Medicamentos tradicionais que atuam diretamente no combate aos sintomas e causas das doenças, formulados com precisão e seguindo rigorosamente as prescrições médicas.',
          items: [
            'Medicamentos sob prescrição',
            'Dosagens personalizadas',
            'Fórmulas combinadas',
            'Manipulação específica',
            'Tratamentos convencionais'
          ]
        },
        {
          id: 3,
          name: 'Fitoterápicos',
          icon: 'Sparkles',
          image: "/src/assets/fitoterapicos.jpg",
          description: 'Medicamentos à base de plantas medicinais, que combinam a sabedoria tradicional com a precisão científica, para a prevenção e tratamento de diversas condições.',
          items: [
            'Extratos vegetais',
            'Cápsulas de ervas',
            'Tinturas especiais',
            'Compostos sinérgicos',
            'Produtos naturais'
          ]
        },
        {
          id: 4,
          name: 'Hormônios',
          icon: 'HeartPulse',
          image: "/src/assets/hormonios.jpg",
          description: 'Reposição hormonal personalizada, com dosagens exatas para equilibrar os níveis hormonais e proporcionar bem-estar físico e mental.',
          items: [
            'Reposição hormonal',
            'Hormônios bioidênticos',
            'Tratamentos para menopausa',
            'Cápsulas sublinguais',
            'Géis transdérmicos'
          ]
        },
        {
          id: 5,
          name: 'Homeopáticos',
          icon: 'Thermometer',
          image: "/src/assets/homeopaticos.jpg",
          description: 'Medicamentos diluídos e dinamizados, seguindo os princípios homeopáticos, para estimular as defesas naturais do organismo.',
          items: [
            'Glóbulos',
            'Tinturas-mãe',
            'Complexos homeopáticos',
            'Doses individualizadas',
            'Tratamentos crônicos'
          ]
        },
        {
          id: 6,
          name: 'Suplementos',
          icon: 'TabletSmartphone',
          image: "/src/assets/suplementos.jpg",
          description: 'Formulações com vitaminas, minerais e nutrientes específicos para complementar a alimentação e suprir as necessidades individuais.',
          items: [
            'Vitaminas personalizadas',
            'Minerais quelados',
            'Antioxidantes',
            'Suporte imunológico',
            'Fórmulas energéticas'
          ]
        }
      ];
      setServices(defaultServices);
      localStorage.setItem('services', JSON.stringify(defaultServices));
    }
  }, []);
  
  const saveServices = (updatedServices: ServiceItem[]) => {
    localStorage.setItem('services', JSON.stringify(updatedServices));
    setServices(updatedServices);
  };
  
  const handleAddService = () => {
    const newService = {
      id: services.length > 0 ? Math.max(...services.map(s => s.id)) + 1 : 1,
      name,
      icon,
      image,
      description,
      items: [...items]
    };
    
    const updatedServices = [...services, newService];
    saveServices(updatedServices);
    
    // Reset form
    setName('');
    setIcon('');
    setImage('');
    setDescription('');
    setItems([]);
    setIsAddDialogOpen(false);
    
    toast.success('Serviço adicionado com sucesso!');
  };
  
  const handleEditService = () => {
    if (!editingService) return;
    
    const updatedServices = services.map(service => 
      service.id === editingService.id 
        ? { 
            ...service, 
            name, 
            icon, 
            image, 
            description, 
            items: [...items] 
          } 
        : service
    );
    
    saveServices(updatedServices);
    setIsEditDialogOpen(false);
    toast.success('Serviço atualizado com sucesso!');
  };
  
  const handleDeleteService = (id: number) => {
    const updatedServices = services.filter(service => service.id !== id);
    saveServices(updatedServices);
    toast.success('Serviço removido com sucesso!');
  };
  
  const openEditDialog = (service: ServiceItem) => {
    setEditingService(service);
    setName(service.name);
    setIcon(service.icon);
    setImage(service.image);
    setDescription(service.description);
    setItems([...service.items]);
    setIsEditDialogOpen(true);
  };
  
  // Reset form fields when opening add dialog
  const openAddDialog = () => {
    setName('');
    setIcon('');
    setImage('');
    setDescription('');
    setItems([]);
    setIsAddDialogOpen(true);
  };
  
  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem.trim()]);
      setNewItem('');
    }
  };
  
  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-farma-800">Gerenciar Serviços</h2>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openAddDialog} className="bg-farma-500 hover:bg-farma-600">
              <Plus className="mr-2 h-4 w-4" />
              Adicionar Serviço
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <DialogTitle>Adicionar Novo Serviço</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4 max-h-[60vh] overflow-y-auto pr-2">
              <div className="grid gap-2">
                <Label htmlFor="name">Nome do Serviço</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Dermatológicos"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="icon">Ícone (nome do ícone Lucide)</Label>
                <Input
                  id="icon"
                  value={icon}
                  onChange={(e) => setIcon(e.target.value)}
                  placeholder="Ex: Droplet, Pill, Sparkles, etc."
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="image">URL da Imagem</Label>
                <Input
                  id="image"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="/src/assets/imagem.jpg"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Descrição</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Descrição detalhada do serviço"
                  rows={3}
                />
              </div>
              <div className="grid gap-2">
                <Label>Itens do Serviço</Label>
                <div className="flex space-x-2">
                  <Input
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    placeholder="Adicionar item"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        addItem();
                      }
                    }}
                  />
                  <Button 
                    type="button" 
                    onClick={addItem}
                    variant="outline"
                  >
                    <PlusCircle className="h-4 w-4" />
                  </Button>
                </div>
                <div className="mt-2 space-y-2">
                  {items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span>{item}</span>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => removeItem(index)}
                        className="text-red-500 hover:text-red-700 h-8 w-8 p-0"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setIsAddDialogOpen(false)}
              >
                Cancelar
              </Button>
              <Button 
                type="button" 
                onClick={handleAddService}
                className="bg-farma-500 hover:bg-farma-600"
              >
                Adicionar
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>Editar Serviço</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4 max-h-[60vh] overflow-y-auto pr-2">
            <div className="grid gap-2">
              <Label htmlFor="edit-name">Nome do Serviço</Label>
              <Input
                id="edit-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-icon">Ícone (nome do ícone Lucide)</Label>
              <Input
                id="edit-icon"
                value={icon}
                onChange={(e) => setIcon(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-image">URL da Imagem</Label>
              <Input
                id="edit-image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-description">Descrição</Label>
              <Textarea
                id="edit-description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
              />
            </div>
            <div className="grid gap-2">
              <Label>Itens do Serviço</Label>
              <div className="flex space-x-2">
                <Input
                  value={newItem}
                  onChange={(e) => setNewItem(e.target.value)}
                  placeholder="Adicionar item"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      addItem();
                    }
                  }}
                />
                <Button 
                  type="button" 
                  onClick={addItem}
                  variant="outline"
                >
                  <PlusCircle className="h-4 w-4" />
                </Button>
              </div>
              <div className="mt-2 space-y-2">
                {items.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span>{item}</span>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => removeItem(index)}
                      className="text-red-500 hover:text-red-700 h-8 w-8 p-0"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setIsEditDialogOpen(false)}
            >
              Cancelar
            </Button>
            <Button 
              type="button" 
              onClick={handleEditService}
              className="bg-farma-500 hover:bg-farma-600"
            >
              Salvar Alterações
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Table of services */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Ícone</TableHead>
              <TableHead>Imagem</TableHead>
              <TableHead>Descrição</TableHead>
              <TableHead>Itens</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {services.map((service) => (
              <TableRow key={service.id}>
                <TableCell>{service.name}</TableCell>
                <TableCell>{service.icon}</TableCell>
                <TableCell>
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-16 h-12 object-cover rounded"
                  />
                </TableCell>
                <TableCell>
                  <div className="max-w-xs truncate">{service.description}</div>
                </TableCell>
                <TableCell>
                  <div className="max-w-xs">
                    {service.items.length} itens
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => openEditDialog(service)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="outline" size="sm" className="text-red-500 hover:text-red-700">
                          <Trash className="h-4 w-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Tem certeza?</AlertDialogTitle>
                          <AlertDialogDescription>
                            Esta ação não pode ser desfeita. Isso excluirá permanentemente o serviço {service.name}.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancelar</AlertDialogCancel>
                          <AlertDialogAction 
                            onClick={() => handleDeleteService(service.id)}
                            className="bg-red-500 text-white hover:bg-red-600"
                          >
                            Excluir
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ServicesManager;
