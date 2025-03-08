
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
import { Plus, Pencil, Trash } from 'lucide-react';

interface Logo {
  id: number;
  name: string;
  url: string;
  alt: string;
  location: string;
}

const LogosManager = () => {
  const [logos, setLogos] = useState<Logo[]>([]);
  const [editingLogo, setEditingLogo] = useState<Logo | null>(null);
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [alt, setAlt] = useState('');
  const [location, setLocation] = useState('');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  
  // Load logos from localStorage or use default
  useEffect(() => {
    const storedLogos = localStorage.getItem('siteLogos');
    if (storedLogos) {
      setLogos(JSON.parse(storedLogos));
    } else {
      // Default logos
      const defaultLogos = [
        {
          id: 1,
          name: 'Logo Principal',
          url: '/public/logo.png',
          alt: 'Logo FarmaSETE',
          location: 'header'
        },
        {
          id: 2,
          name: 'Logo Rodapé',
          url: '/public/logo-footer.png',
          alt: 'Logo FarmaSETE Rodapé',
          location: 'footer'
        }
      ];
      setLogos(defaultLogos);
      localStorage.setItem('siteLogos', JSON.stringify(defaultLogos));
    }
  }, []);
  
  const saveLogos = (updatedLogos: Logo[]) => {
    localStorage.setItem('siteLogos', JSON.stringify(updatedLogos));
    setLogos(updatedLogos);
  };
  
  const handleAddLogo = () => {
    const newLogo = {
      id: logos.length > 0 ? Math.max(...logos.map(logo => logo.id)) + 1 : 1,
      name,
      url,
      alt,
      location
    };
    
    const updatedLogos = [...logos, newLogo];
    saveLogos(updatedLogos);
    
    // Reset form
    setName('');
    setUrl('');
    setAlt('');
    setLocation('');
    setIsAddDialogOpen(false);
    
    toast.success('Logo adicionado com sucesso!');
  };
  
  const handleEditLogo = () => {
    if (!editingLogo) return;
    
    const updatedLogos = logos.map(logo => 
      logo.id === editingLogo.id 
        ? { 
            ...logo, 
            name, 
            url, 
            alt, 
            location 
          } 
        : logo
    );
    
    saveLogos(updatedLogos);
    setIsEditDialogOpen(false);
    toast.success('Logo atualizado com sucesso!');
  };
  
  const handleDeleteLogo = (id: number) => {
    const updatedLogos = logos.filter(logo => logo.id !== id);
    saveLogos(updatedLogos);
    toast.success('Logo removido com sucesso!');
  };
  
  const openEditDialog = (logo: Logo) => {
    setEditingLogo(logo);
    setName(logo.name);
    setUrl(logo.url);
    setAlt(logo.alt);
    setLocation(logo.location);
    setIsEditDialogOpen(true);
  };
  
  // Reset form fields when opening add dialog
  const openAddDialog = () => {
    setName('');
    setUrl('');
    setAlt('');
    setLocation('');
    setIsAddDialogOpen(true);
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-farma-800">Gerenciar Logotipos</h2>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openAddDialog} className="bg-farma-500 hover:bg-farma-600">
              <Plus className="mr-2 h-4 w-4" />
              Adicionar Logo
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <DialogTitle>Adicionar Novo Logo</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Nome do Logo</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Logo Principal, Logo Rodapé"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="url">URL do Logo</Label>
                <Input
                  id="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="/public/logo.png"
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
                <Label htmlFor="location">Localização no Site</Label>
                <Input
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Ex: header, footer, sidebar"
                />
              </div>
              {url && (
                <div className="mt-2">
                  <Label>Pré-visualização:</Label>
                  <div className="mt-2 border rounded p-4 flex justify-center bg-white">
                    <img 
                      src={url} 
                      alt={alt || 'Preview'} 
                      className="max-h-32 object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://placehold.co/300x100?text=Logo+Preview';
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
                onClick={handleAddLogo}
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
            <DialogTitle>Editar Logo</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="edit-name">Nome do Logo</Label>
              <Input
                id="edit-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-url">URL do Logo</Label>
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
              <Label htmlFor="edit-location">Localização no Site</Label>
              <Input
                id="edit-location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            {url && (
              <div className="mt-2">
                <Label>Pré-visualização:</Label>
                <div className="mt-2 border rounded p-4 flex justify-center bg-white">
                  <img 
                    src={url} 
                    alt={alt || 'Preview'} 
                    className="max-h-32 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://placehold.co/300x100?text=Logo+Preview';
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
              onClick={handleEditLogo}
              className="bg-farma-500 hover:bg-farma-600"
            >
              Salvar Alterações
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Table of logos */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Preview</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>URL</TableHead>
              <TableHead>Alt</TableHead>
              <TableHead>Localização</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {logos.map((logo) => (
              <TableRow key={logo.id}>
                <TableCell>
                  <div className="w-20 h-12 flex items-center justify-center bg-white rounded p-1">
                    <img 
                      src={logo.url} 
                      alt={logo.alt}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://placehold.co/100x50?text=Logo';
                      }}
                    />
                  </div>
                </TableCell>
                <TableCell>{logo.name}</TableCell>
                <TableCell>
                  <div className="max-w-xs truncate">{logo.url}</div>
                </TableCell>
                <TableCell>
                  <div className="max-w-xs truncate">{logo.alt}</div>
                </TableCell>
                <TableCell>{logo.location}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => openEditDialog(logo)}
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
                            Esta ação não pode ser desfeita. Isso excluirá permanentemente o logo {logo.name}.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancelar</AlertDialogCancel>
                          <AlertDialogAction 
                            onClick={() => handleDeleteLogo(logo.id)}
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

export default LogosManager;
