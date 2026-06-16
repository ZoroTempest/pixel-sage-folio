import { useParams, useNavigate } from "react-router-dom";

export default function SampleWebsite() {
  const { website } = useParams();
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen bg-background flex flex-col">
      <div className="h-14 border-b flex items-center px-4">
        <button
        onClick={() => navigate(-1)}
        className="px-4 py-2 rounded-lg border hover:bg-muted transition"
        >
        ← Back to Portfolio
        </button>

        <div className="ml-4 text-sm text-muted-foreground">
          Live Website Sample
        </div>
      </div>

      <iframe
        src={`/Sample_Websites/${website}`}
        title="Website Preview"
        className="flex-1 w-full border-0"
      />
    </div>
  );
}