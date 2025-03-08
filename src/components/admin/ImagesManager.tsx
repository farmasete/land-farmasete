
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { Plus, Pencil, Trash, Image } from 'lucide-react';

interface SiteImage {
  id: number;
  name: string;
  url: string;
  alt: string;
  section: string;
}

const ImagesManager = () => {
  const [images, setImages] = useState<SiteImage[]>([]);
  const [editingImage, setEditingImage] = useState<SiteImage | null>(null);
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [alt, setAlt] = useState('');
  const [section, setSection] = useState('');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  
  // Load images from localStorage or use default
  useEffect(() => {
    const storedImages = localStorage.getItem('siteImages');
    if (storedImages) {
      setImages(JSON.parse(storedImages));
    } else {
      // Default images
      const defaultImages = [
        {
          id: 1,
          name: 'Loja',
          url: '/src/assets/loja.jpg',
          alt: 'Fachada da FarmaSETE',
          section: 'services'
        },
        {
          id: 2,
          name: 'Laboratório',
          url: '/src/assets/laboratorio.jpg',
          alt: 'Laboratório da FarmaSETE',
          section: 'services'
        },
        {
          id: 3,
          name: 'Farmacêutico',
          url: '/src/assets/farmaceutico.jpg',
          alt: 'Equipe farmacêutica da FarmaSETE',
          section: 'services'
        },
        {
          id: 4,
          name: 'Atendimento',
          url: '/src/assets/atendimento.jpg',
          alt: 'Atendimento personalizado na FarmaSETE',
          section: 'services'
        },
        {
          id: 5,
          name: 'Dermatológicos',
          url: '/src/assets/dermatologicos.jpg',
          alt: 'Serviço de Dermatológicos',
          section: 'services'
        },
        {
          id: 6,
          name: 'Alopatia',
          url: '/src/assets/alopatia.jpg',
          alt: 'Serviço de Alopatia',
          section: 'services'
        },
        {
          id: 7,
          name: 'Fitoterápicos',
          url: '/src/assets/fitoterapicos.jpg',
          alt: 'Serviço de Fitoterápicos',
          section: 'services'
        },
        {
          id: 8,
          name: 'Hormônios',
          url: '/src/assets/hormonios.jpg',
          alt: 'Serviço de Hormônios',
          section: 'services'
        },
        {
          id: 9,
          name: 'Homeopáticos',
          url: '/src/assets/homeopaticos.jpg',
          alt: 'Serviço de Homeopáticos',
          section: 'services'
        },
        {
          id: 10,
          name: 'Suplementos',
          url: '/src/assets/suplementos.jpg',
          alt: 'Serviço de Suplementos',
          section: 'services'
        }
      ];
      setImages(defaultImages);
      localStorage.setItem('siteImages', JSON.stringify(defaultImages));
    }
  }, []);
  
  const saveImages = (updatedImages: SiteImage[]) => {
    localStorage.setItem('siteImages', JSON.stringify(updatedImages));
    setImages(updatedImages);
  };
  
  const handleAddImage = () => {
    const newImage = {
      id: images.length > 0 ? Math.max(...images.map(img => img.id)) + 1 : 1,
      name,
      url,
      alt,
      section
    };
    
    const updatedImages = [...images, newImage];
    saveImages(updatedImages);
    
    // Reset form
    setName('');
    setUrl('');
    setAlt('');
    setSection('');
    setIsAddDialogOpen(false);
    
    toast.success('Imagem adicionada com sucesso!');
  };
  
  const handleEditImage = () => {
    if (!editingImage) return;
    
    const updatedImages = images.map(image => 
      image.id === editingImage.id 
        ? { 
            ...image, 
            name, 
            url, 
            alt, 
            section 
          } 
        : image
    );
    
    saveImages(updatedImages);
    setIsEditDialogOpen(false);
    toast.success('Imagem atualizada com sucesso!');
  };
  
  const handleDeleteImage = (id: number) => {
    const updatedImages = images.filter(image => image.id !== id);
    saveImages(updatedImages);
    toast.success('Imagem removida com sucesso!');
  };
  
  const openEditDialog = (image: SiteImage) => {
    setEditingImage(image);
    setName(image.name);
    setUrl(image.url);
    setAlt(image.alt);
    setSection(image.section);
    setIsEditDialogOpen(true);
  };
  
  // Reset form fields when opening add dialog
  const openAddDialog = () => {
    setName('');
    setUrl('');
    setAlt('');
    setSection('');
    setIsAddDialogOpen(true);
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-farma-800">Gerenciar Imagens</h2>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openAddDialog} className="bg-farma-500 hover:bg-farma-600">
              <Plus className="mr-2 h-4 w-4" />
              Adicionar Imagem
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <DialogTitle>Adicionar Nova Imagem</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Nome da Imagem</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Loja, Laboratório, etc."
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="url">URL da Imagem</Label>
                <Input
                  id="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="/src/assets/imagem.jpg"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="alt">Texto Alternativo</Label>
                <Input
                  id="alt"
                  value={alt}
                  onChange={(e) => setAlt(e.target.value)}
                  placeholder="Descrição para acessibilidade"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="section">Seção do Site</Label>
                <Input
                  id="section"
                  value={section}
                  onChange={(e) => setSection(e.target.value)}
                  placeholder="Ex: services, about, hero, etc."
                />
              </div>
              {url && (
                <div className="mt-2">
                  <Label>Pré-visualização:</Label>
                  <div className="mt-2 border rounded overflow-hidden">
                    <img 
                      src={url} 
                      alt={alt || 'Preview'} 
                      className="w-full h-40 object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://placehold.co/300x200?text=Error+Loading+Image';
                      }}
                    />
                  </div>
                </div>
              )}
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
                onClick={handleAddImage}
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
            <DialogTitle>Editar Imagem</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="edit-name">Nome da Imagem</Label>
              <Input
                id="edit-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-url">URL da Imagem</Label>
              <Input
                id="edit-url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-alt">Texto Alternativo</Label>
              <Input
                id="edit-alt"
                value={alt}
                onChange={(e) => setAlt(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-section">Seção do Site</Label>
              <Input
                id="edit-section"
                value={section}
                onChange={(e) => setSection(e.target.value)}
              />
            </div>
            {url && (
              <div className="mt-2">
                <Label>Pré-visualização:</Label>
                <div className="mt-2 border rounded overflow-hidden">
                  <img 
                    src={url} 
                    alt={alt || 'Preview'} 
                    className="w-full h-40 object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://placehold.co/300x200?text=Error+Loading+Image';
                    }}
                  />
                </div>
              </div>
            )}
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
              onClick={handleEditImage}
              className="bg-farma-500 hover:bg-farma-600"
            >
              Salvar Alterações
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Table of images */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Preview</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>URL</TableHead>
              <TableHead>Alt</TableHead>
              <TableHead>Seção</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {images.map((image) => (
              <TableRow key={image.id}>
                <TableCell>
                  <div className="w-16 h-12 rounded overflow-hidden">
                    <img 
                      src={image.url} 
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://placehold.co/300x200?text=Error';
                      }}
                    />
                  </div>
                </TableCell>
                <TableCell>{image.name}</TableCell>
                <TableCell>
                  <div className="max-w-xs truncate">{image.url}</div>
                </TableCell>
                <TableCell>
                  <div className="max-w-xs truncate">{image.alt}</div>
                </TableCell>
                <TableCell>{image.section}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => openEditDialog(image)}
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
                            Esta ação não pode ser desfeita. Isso excluirá permanentemente a imagem {image.name}.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancelar</AlertDialogCancel>
                          <AlertDialogAction 
                            onClick={() => handleDeleteImage(image.id)}
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

export default ImagesManager;
