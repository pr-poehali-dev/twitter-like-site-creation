
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface Achievement {
  id: string;
  title: string;
  date: string;
  description: string;
  icon: string;
}

interface AchievementsProps {
  items: Achievement[];
  onAdd?: () => void;
  onEdit?: (id: string) => void;
}

const Achievements = ({ items, onAdd, onEdit }: AchievementsProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Icon name="Trophy" size={18} className="text-purple-500" />
          Достижения
        </h3>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={onAdd} className="flex items-center gap-1">
            <Icon name="Plus" size={14} />
            <span>Добавить</span>
          </Button>
        </div>
      </div>
      
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="relative border-b pb-4 last:border-0 last:pb-0 pl-8">
            <div className="absolute left-0 top-0">
              <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                <Icon name={item.icon} size={14} className="text-purple-500" />
              </div>
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-base font-medium">{item.title}</h4>
                <p className="text-xs text-gray-500 mt-1">{item.date}</p>
                <p className="text-sm text-gray-700 mt-2">{item.description}</p>
              </div>
              <Button variant="ghost" size="sm" onClick={() => onEdit?.(item.id)}>
                Edit
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
