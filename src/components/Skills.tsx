
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

interface Skill {
  id: string;
  name: string;
  level: number;
  category: string;
}

interface SkillsProps {
  skills: Skill[];
  onAdd?: () => void;
  onEdit?: (id: string) => void;
}

const Skills = ({ skills, onAdd, onEdit }: SkillsProps) => {
  // Группировка навыков по категориям
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Icon name="Lightbulb" size={18} className="text-purple-500" />
          Навыки
        </h3>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={onAdd} className="flex items-center gap-1">
            <Icon name="Plus" size={14} />
            <span>Добавить</span>
          </Button>
        </div>
      </div>
      
      <div className="space-y-6">
        {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
          <div key={category} className="mb-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">{category}</h4>
            <div className="space-y-3">
              {categorySkills.map((skill) => (
                <div key={skill.id} className="flex items-center justify-between">
                  <div className="flex-grow">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-gray-500">{skill.level}%</span>
                        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => onEdit?.(skill.id)}>
                          <Icon name="Pencil" size={12} />
                        </Button>
                      </div>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill.id} variant="outline" className="px-3 py-1 bg-purple-50">
            {skill.name}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default Skills;
