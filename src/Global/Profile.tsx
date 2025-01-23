import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Mail, Phone } from "lucide-react";

export function ProfileCard(props: {
  scene: "profile" | "edit-profile";
  setScene: (scene: "profile" | "edit-profile") => void;
}) {
  const { setScene } = props;
  return (
    <Card className=" mx-auto rounded-xl h-[364px] w-[360px]  overflow-hidden">
      <div className="h-32 bg-gradient-to-r from-yellow-100 to-blue-100" />
      <div className="p-6">
        <div className="flex justify-between items-start mb-6">
          <div className="flex gap-4">
            <div className="relative -mt-12">
              <img
                src="https://images.pexels.com/photos/30150601/pexels-photo-30150601/free-photo-of-stylish-woman-in-urban-black-and-white-portrait.jpeg"
                alt="Profile picture"
                className="rounded-full w-[80px] h-[80px] border-4 border-white"
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Chike Opara</h2>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Admin</span>
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-700 hover:bg-green-100"
                >
                  ACTIVE
                </Badge>
              </div>
            </div>
          </div>
          <Button
            onClick={() => {
              setScene("edit-profile");
            }}
            variant="outline"
            size="sm"
            className="h-8"
          >
            Update
          </Button>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-gray-600">
            <Mail className="h-4 w-4" />
            <span>chike.opara@paynflex.com</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Phone className="h-4 w-4" />
            <span>0812 234 6776</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="h-4 w-4" />
            <span>November 6, 2024</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
