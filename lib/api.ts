export const token: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI4ZDBhMTZjOS1jZjkzLTQ5MDgtOTBiZS1iZGNiMzc0MWQ5YmUiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcyMDYwODcxMCwiZXhwIjoxNzIxMjEzNTEwfQ.IDMJQ-RfGBrvXvin8sxlaYMXX5BjxkWZMVeQ-aNpYwI";

interface CreateMeetingResponse {
  roomId: string;
}

// API call to create meeting
export const createMeeting = async ({ token }: { token: string }): Promise<string> => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });

  if (!res.ok) {
    throw new Error("Failed to create meeting");
  }

  const { roomId }: CreateMeetingResponse = await res.json();
  return roomId;
};
