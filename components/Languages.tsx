import { CardHeader, CardTitle, CardContent, Card } from "./ui/card";

export default function Languages() {
  return (
    <Card className="border border-border rounded-sm shadow-none">
      <CardHeader>
        <CardTitle className="text-2xl font-bold font-serif">
          Languages
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-base">English (Fluent)</p>
        <p className="text-base">Afaan Oromoo (Native)</p>
        <p className="text-base">Amharic (Fluent)</p>
      </CardContent>
    </Card>
  );
}
