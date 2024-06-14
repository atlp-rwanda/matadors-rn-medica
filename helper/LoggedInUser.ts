import { supabase } from "@/lib/supabase";

interface Session {
  user: User | null;
}

interface User {
  id: string;
  email: string;
  phone?: string;
}

interface SetUserData {
  (user: User): void;
}


export async function getPatientData(supabase: any, userInfo: any): Promise<any> {
  try {
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();

    if (sessionError) {
      console.error("Error fetching session:", sessionError);
      return;
    }

    const user = session?.user;

    if (!user) {
      console.error("User is not authenticated");
      return;
    }

    userInfo(user);
  } catch (error) {
    console.error("Error while fetching session:", error);
    return;
  }
}

  export async function fetchPatientData(id: string, patentInfo: any) {
      try {
        const { data, error } = await supabase
          .from("patients")
          .select(`*`)
          .eq("auth_id", id);
        if (error) {
          console.error("Error fetching patient data:", error);
          return;
        }
        patentInfo(data);
      } catch (error) {
        console.error("Error while fetching data:", error);
        return;
      }
    }