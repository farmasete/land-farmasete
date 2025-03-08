
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
import { Plus, Pencil, Trash, Star } from 'lucide-react';

// Define a type for testimonials
interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

const TestimonialsManager = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [image, setImage] = useState('');
  const [quote, setQuote] = useState('');
  const [rating, setRating] = useState(5);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  
  // Load testimonials from localStorage or use default
  useEffect(() => {
    const storedTestimonials = localStorage.getItem('testimonials');
    if (storedTestimonials) {
      setTestimonials(JSON.parse(storedTestimonials));
    } else {
      // Default testimonials from the Testimonials component
      const defaultTestimonials = [
        {
          id: 1,
          name: 'Maria Clara',
          role: 'Cliente há 3 anos',
          image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
          quote: 'A FarmaSETE transformou minha experiência com medicamentos manipulados. A equipe é extremamente atenciosa e as formulações são perfeitas para minhas necessidades específicas.',
          rating: 5
        },
        {
          id: 2,
          name: 'Carlos Eduardo',
          role: 'Cliente há 1 ano',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
          quote: 'Desde que comecei a utilizar os suplementos personalizados da FarmaSETE, notei uma melhora significativa na minha disposição e bem-estar. Recomendo a todos!',
          rating: 5
        },
        {
          id: 3,
          name: 'Ana Beatriz',
          role: 'Cliente há 2 anos',
          image: 'https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
          quote: 'O tratamento dermatológico personalizado que recebi na FarmaSETE foi fundamental para resolver meu problema de pele. Atenção aos detalhes e formulação impecável.',
          rating: 4
        },
        {
          id: 4,
          name: 'Roberto Mendes',
          role: 'Cliente há 6 meses',
          image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
          quote: 'O atendimento na FarmaSETE é excepcional. Sempre esclarecem todas as minhas dúvidas e as fórmulas são entregues no prazo com qualidade superior.',
          rating: 5
        }
      ];
      setTestimonials(defaultTestimonials);
      localStorage.setItem('testimonials', JSON.stringify(defaultTestimonials));
    }
  }, []);
  
  const saveTestimonials = (updatedTestimonials: Testimonial[]) => {
    localStorage.setItem('testimonials', JSON.stringify(updatedTestimonials));
    setTestimonials(updatedTestimonials);
  };
  
  const handleAddTestimonial = () => {
    const newTestimonial = {
      id: testimonials.length > 0 ? Math.max(...testimonials.map(t => t.id)) + 1 : 1,
      name,
      role,
      image,
      quote,
      rating
    };
    
    const updatedTestimonials = [...testimonials, newTestimonial];
    saveTestimonials(updatedTestimonials);
    
    // Reset form
    setName('');
    setRole('');
    setImage('');
    setQuote('');
    setRating(5);
    setIsAddDialogOpen(false);
    
    toast.success('Depoimento adicionado com sucesso!');
  };
  
  const handleEditTestimonial = () => {
    if (!editingTestimonial) return;
    
    const updatedTestimonials = testimonials.map(testimonial => 
      testimonial.id === editingTestimonial.id 
        ? { 
            ...testimonial, 
            name, 
            role, 
            image, 
            quote, 
            rating 
          } 
        : testimonial
    );
    
    saveTestimonials(updatedTestimonials);
    setIsEditDialogOpen(false);
    toast.success('Depoimento atualizado com sucesso!');
  };
  
  const handleDeleteTestimonial = (id: number) => {
    const updatedTestimonials = testimonials.filter(testimonial => testimonial.id !== id);
    saveTestimonials(updatedTestimonials);
    toast.success('Depoimento removido com sucesso!');
  };
  
  const openEditDialog = (testimonial: Testimonial) => {
    setEditingTestimonial(testimonial);
    setName(testimonial.name);
    setRole(testimonial.role);
    setImage(testimonial.image);
    setQuote(testimonial.quote);
    setRating(testimonial.rating);
    setIsEditDialogOpen(true);
  };
  
  // Reset form fields when opening add dialog
  const openAddDialog = () => {
    setName('');
    setRole('');
    setImage('');
    setQuote('');
    setRating(5);
    setIsAddDialogOpen(true);
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-farma-800">Gerenciar Depoimentos</h2>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openAddDialog} className="bg-farma-500 hover:bg-farma-600">
              <Plus className="mr-2 h-4 w-4" />
              Adicionar Depoimento
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <DialogTitle>Adicionar Novo Depoimento</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Nome</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nome do cliente"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="role">Posição/Função</Label>
                <Input
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="Ex: Cliente há X anos"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="image">URL da Imagem</Label>
                <Input
                  id="image"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="https://exemplo.com/imagem.jpg"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="quote">Depoimento</Label>
                <Textarea
                  id="quote"
                  value={quote}
                  onChange={(e) => setQuote(e.target.value)}
                  placeholder="Texto do depoimento"
                  rows={4}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="rating">Avaliação (1-5)</Label>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setRating(value)}
                      className="p-1"
                    >
                      <Star 
                        className={`h-6 w-6 ${
                          value <= rating 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`} 
                      />
                    </button>
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
                onClick={handleAddTestimonial}
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
            <DialogTitle>Editar Depoimento</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="edit-name">Nome</Label>
              <Input
                id="edit-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-role">Posição/Função</Label>
              <Input
                id="edit-role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
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
              <Label htmlFor="edit-quote">Depoimento</Label>
              <Textarea
                id="edit-quote"
                value={quote}
                onChange={(e) => setQuote(e.target.value)}
                rows={4}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-rating">Avaliação (1-5)</Label>
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setRating(value)}
                    className="p-1"
                  >
                    <Star 
                      className={`h-6 w-6 ${
                        value <= rating 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-300'
                      }`} 
                    />
                  </button>
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
              onClick={handleEditTestimonial}
              className="bg-farma-500 hover:bg-farma-600"
            >
              Salvar Alterações
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Table of testimonials */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Imagem</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Função</TableHead>
              <TableHead>Avaliação</TableHead>
              <TableHead>Depoimento</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {testimonials.map((testimonial) => (
              <TableRow key={testimonial.id}>
                <TableCell>
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </TableCell>
                <TableCell>{testimonial.name}</TableCell>
                <TableCell>{testimonial.role}</TableCell>
                <TableCell>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${
                          i < testimonial.rating 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="max-w-xs truncate">{testimonial.quote}</div>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => openEditDialog(testimonial)}
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
                            Esta ação não pode ser desfeita. Isso excluirá permanentemente o depoimento de {testimonial.name}.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancelar</AlertDialogCancel>
                          <AlertDialogAction 
                            onClick={() => handleDeleteTestimonial(testimonial.id)}
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

export default TestimonialsManager;
