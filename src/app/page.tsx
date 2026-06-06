<<<<<<< HEAD
=======
// Auto-initialize cloud sync when server starts
import "@/lib/initCloudSync";
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
import { redirect } from "next/navigation";

export default function InitPage() {
  redirect("/dashboard");
}
