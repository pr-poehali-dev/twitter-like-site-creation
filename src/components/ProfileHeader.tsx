
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface ProfileHeaderProps {
  avatar: string;
  name: string;
  position: string;
  company: string;
  location: string;
  birthDate: string;
  age: number;
  phone: string;
  email: string;
  website: string;
  linkedin: string;
  skills: string[];
  onEdit?: () => void;
}

const ProfileHeader = ({
  avatar,
  name,
  position,
  company,
  location,
  birthDate,
  age,
  phone,
  email,
  website,
  linkedin,
  skills,
  onEdit,
}: ProfileHeaderProps) => {
  return (
    <div className="bg-purple-500 rounded-lg p-6 flex flex-col md:flex-row gap-6 text-white">
      <div className="flex-shrink-0">
        <Avatar className="h-24 w-24 border-4 border-white">
          <img src={avatar} alt={name} className="object-cover" />
        </Avatar>
      </div>
      
      <div className="flex-grow space-y-2">
        <div className="flex justify-between items-start">
          <h2 className="text-2xl font-bold">{name}</h2>
          <Button variant="outline" size="sm" onClick={onEdit} className="text-white border-white hover:bg-white/20">
            Edit
          </Button>
        </div>
        
        <p className="text-white/90">{position} at {company}</p>
        
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <Icon name="MapPin" size={16} />
            <span>{location}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Icon name="Calendar" size={16} />
            <span>{birthDate} ({age} y.r.)</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Icon name="Phone" size={16} />
            <span>{phone}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Icon name="Mail" size={16} />
            <span>{email}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Icon name="Globe" size={16} />
            <span>{website}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Icon name="Linkedin" size={16} />
            <span>{linkedin}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {skills.map((skill) => (
            <Badge key={skill} className="bg-white/20 hover:bg-white/30">{skill}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
