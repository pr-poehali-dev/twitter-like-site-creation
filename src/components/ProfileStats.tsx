
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

interface ProfileStatsProps {
  completion: number;
  totalEarned: string;
  onEdit?: () => void;
}

const ProfileStats = ({ completion, totalEarned, onEdit }: ProfileStatsProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-purple-500">{completion}%</span>
          </div>
          <svg className="w-full h-full" viewBox="0 0 36 36">
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#EEEEEE"
              strokeWidth="3"
              strokeDasharray="100, 100"
            />
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#9b87f5"
              strokeWidth="3"
              strokeDasharray={`${completion}, 100`}
            />
          </svg>
        </div>
        <Button variant="ghost" size="sm" onClick={onEdit}>
          Edit
        </Button>
      </div>
      
      <div className="mt-2 py-2 px-4 bg-gray-100 rounded-full flex items-center justify-center">
        <span className="text-sm font-medium text-gray-700">{totalEarned} of total achieved</span>
      </div>
    </div>
  );
};

export default ProfileStats;
