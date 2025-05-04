
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface EducationItem {
  id: string;
  institution: string;
  logo: string;
  degree: string;
  field: string;
  dateRange: string;
}

interface EducationProps {
  items: EducationItem[];
  onAdd?: () => void;
  onEdit?: (id: string) => void;
}

const Education = ({ items, onAdd, onEdit }: EducationProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Icon name="GraduationCap" size={18} className="text-purple-500" />
          Образование
        </h3>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={onAdd} className="flex items-center gap-1">
            <Icon name="Plus" size={14} />
            <span>Добавить</span>
          </Button>
        </div>
      </div>
      
      <div className="space-y-6">
        {items.map((item) => (
          <div key={item.id} className="border-b pb-6 last:border-0 last:pb-0">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gray-200 rounded-md flex items-center justify-center overflow-hidden">
                  <img src={item.logo} alt={item.institution} className="w-full h-full object-cover" />
                </div>
              </div>
              
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-gray-900">{item.degree} {item.field}</h4>
                    <p className="text-sm text-gray-600">{item.institution}</p>
                    <p className="text-xs text-gray-500 mt-1">{item.dateRange}</p>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => onEdit?.(item.id)}>
                    Edit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
