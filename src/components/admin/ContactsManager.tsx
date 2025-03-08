
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
import { Plus, Pencil, Trash, Phone, Mail, MapPin, Clock } from 'lucide-react';

interface Contact {
  id: number;
  type: string;
  value: string;
  label: string;
  icon: string;
}

const ContactsManager = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [editingContact, setEditingContact] = useState<Contact | null>(null);
  const [type, setType] = useState('');
  const [value, setValue] = useState('');
  const [label, setLabel] = useState('');
  const [icon, setIcon] = useState('');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  
  // Load contacts from localStorage or use default
  useEffect(() => {
    const storedContacts = localStorage.getItem('siteContacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    } else {
      // Default contacts
      const defaultContacts = [
        {
          id: 1,
          type: 'phone',
          value: '(11) 9999-8888',
          label: 'Telefone Principal',
          icon: 'Phone'
        },
        {
          id: 2,
          type: 'phone',
          value: '(11) 3333-4444',
          label: 'Telefone Secundário',
          icon: 'Phone'
        },
        {
          id: 3,
          type: 'email',
          value: 'contato@farmasete.com.br',
          label: 'E-mail de Contato',
          icon: 'Mail'
        },
        {
          id: 4,
          type: 'email',
          value: 'atendimento@farmasete.com.br',
          label: 'E-mail de Atendimento',
          icon: 'Mail'
        },
        {
          id: 5,
          type: 'address',
          value: 'Av. Paulista, 1000',
          label: 'Endereço',
          icon: 'MapPin'
        },
        {
          id: 6,
          type: 'address',
          value: 'São Paulo, SP - CEP 01310-100',
          label: 'Cidade e CEP',
          icon: 'MapPin'
        },
        {
          id: 7,
          type: 'hours',
          value: 'Segunda a Sexta: 8h às 19h',
          label: 'Dias de Semana',
          icon: 'Clock'
        },
        {
          id: 8,
          type: 'hours',
          value: 'Sábado: 8h às 13h',
          label: 'Sábado',
          icon: 'Clock'
        },
        {
          id: 9,
          type: 'whatsapp',
          value: '5511999988888',
          label: 'WhatsApp',
          icon: 'MessageCircle'
        }
      ];
      setContacts(defaultContacts);
      localStorage.setItem('siteContacts', JSON.stringify(defaultContacts));
    }
  }, []);
  
  const saveContacts = (updatedContacts: Contact[]) => {
    localStorage.setItem('siteContacts', JSON.stringify(updatedContacts));
    setContacts(updatedContacts);
  };
  
  const handleAddContact = () => {
    const newContact = {
      id: contacts.length > 0 ? Math.max(...contacts.map(contact => contact.id)) + 1 : 1,
      type,
      value,
      label,
      icon
    };
    
    const updatedContacts = [...contacts, newContact];
    saveContacts(updatedContacts);
    
    // Reset form
    setType('');
    setValue('');
    setLabel('');
    setIcon('');
    setIsAddDialogOpen(false);
    
    toast.success('Contato adicionado com sucesso!');
  };
  
  const handleEditContact = () => {
    if (!editingContact) return;
    
    const updatedContacts = contacts.map(contact => 
      contact.id === editingContact.id 
        ? { 
            ...contact, 
            type, 
            value, 
            label, 
            icon 
          } 
        : contact
    );
    
    saveContacts(updatedContacts);
    setIsEditDialogOpen(false);
    toast.success('Contato atualizado com sucesso!');
  };
  
  const handleDeleteContact = (id: number) => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    saveContacts(updatedContacts);
    toast.success('Contato removido com sucesso!');
  };
  
  const openEditDialog = (contact: Contact) => {
    setEditingContact(contact);
    setType(contact.type);
    setValue(contact.value);
    setLabel(contact.label);
    setIcon(contact.icon);
    setIsEditDialogOpen(true);
  };
  
  // Reset form fields when opening add dialog
  const openAddDialog = () => {
    setType('');
    setValue('');
    setLabel('');
    setIcon('');
    setIsAddDialogOpen(true);
  };
  
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Phone':
        return <Phone className="h-4 w-4" />;
      case 'Mail':
        return <Mail className="h-4 w-4" />;
      case 'MapPin':
        return <MapPin className="h-4 w-4" />;
      case 'Clock':
        return <Clock className="h-4 w-4" />;
      case 'MessageCircle':
        return <Phone className="h-4 w-4" />;
      default:
        return <Phone className="h-4 w-4" />;
    }
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-farma-800">Gerenciar Contatos</h2>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openAddDialog} className="bg-farma-500 hover:bg-farma-600">
              <Plus className="mr-2 h-4 w-4" />
              Adicionar Contato
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <DialogTitle>Adicionar Novo Contato</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="type">Tipo de Contato</Label>
                <select
                  id="type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-farma-500"
                >
                  <option value="">Selecione um tipo</option>
                  <option value="phone">Telefone</option>
                  <option value="email">E-mail</option>
                  <option value="address">Endereço</option>
                  <option value="hours">Horário</option>
                  <option value="whatsapp">WhatsApp</option>
                </select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="value">Valor do Contato</Label>
                <Input
                  id="value"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder={
                    type === 'phone' ? '(11) 9999-8888' : 
                    type === 'email' ? 'contato@exemplo.com' :
                    type === 'address' ? 'Rua Exemplo, 123' :
                    type === 'hours' ? 'Segunda a Sexta: 8h às 18h' :
                    type === 'whatsapp' ? '5511999998888' : 
                    'Valor do contato'
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="label">Rótulo/Descrição</Label>
                <Input
                  id="label"
                  value={label}
                  onChange={(e) => setLabel(e.target.value)}
                  placeholder="Ex: Telefone Principal, E-mail de Contato"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="icon">Ícone</Label>
                <select
                  id="icon"
                  value={icon}
                  onChange={(e) => setIcon(e.target.value)}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-farma-500"
                >
                  <option value="">Selecione um ícone</option>
                  <option value="Phone">Telefone</option>
                  <option value="Mail">E-mail</option>
                  <option value="MapPin">Localização</option>
                  <option value="Clock">Relógio</option>
                  <option value="MessageCircle">WhatsApp</option>
                </select>
              </div>
              {icon && (
                <div className="flex items-center mt-2 p-2 bg-gray-50 rounded">
                  <div className="mr-2 bg-white p-2 rounded-full">
                    {getIconComponent(icon)}
                  </div>
                  <span>Pré-visualização do ícone</span>
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
                onClick={handleAddContact}
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
            <DialogTitle>Editar Contato</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="edit-type">Tipo de Contato</Label>
              <select
                id="edit-type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-farma-500"
              >
                <option value="">Selecione um tipo</option>
                <option value="phone">Telefone</option>
                <option value="email">E-mail</option>
                <option value="address">Endereço</option>
                <option value="hours">Horário</option>
                <option value="whatsapp">WhatsApp</option>
              </select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-value">Valor do Contato</Label>
              <Input
                id="edit-value"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-label">Rótulo/Descrição</Label>
              <Input
                id="edit-label"
                value={label}
                onChange={(e) => setLabel(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-icon">Ícone</Label>
              <select
                id="edit-icon"
                value={icon}
                onChange={(e) => setIcon(e.target.value)}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-farma-500"
              >
                <option value="">Selecione um ícone</option>
                <option value="Phone">Telefone</option>
                <option value="Mail">E-mail</option>
                <option value="MapPin">Localização</option>
                <option value="Clock">Relógio</option>
                <option value="MessageCircle">WhatsApp</option>
              </select>
            </div>
            {icon && (
              <div className="flex items-center mt-2 p-2 bg-gray-50 rounded">
                <div className="mr-2 bg-white p-2 rounded-full">
                  {getIconComponent(icon)}
                </div>
                <span>Pré-visualização do ícone</span>
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
              onClick={handleEditContact}
              className="bg-farma-500 hover:bg-farma-600"
            >
              Salvar Alterações
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Table of contacts */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tipo</TableHead>
              <TableHead>Valor</TableHead>
              <TableHead>Rótulo</TableHead>
              <TableHead>Ícone</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contacts.map((contact) => (
              <TableRow key={contact.id}>
                <TableCell>
                  <div className="capitalize">{contact.type}</div>
                </TableCell>
                <TableCell>{contact.value}</TableCell>
                <TableCell>{contact.label}</TableCell>
                <TableCell>
                  <div className="bg-gray-100 p-2 rounded-full inline-flex">
                    {getIconComponent(contact.icon)}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => openEditDialog(contact)}
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
                            Esta ação não pode ser desfeita. Isso excluirá permanentemente o contato {contact.label}.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancelar</AlertDialogCancel>
                          <AlertDialogAction 
                            onClick={() => handleDeleteContact(contact.id)}
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

export default ContactsManager;
