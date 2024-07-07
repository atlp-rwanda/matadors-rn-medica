export const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI5Y2Q3ZjA4NC0yMzRlLTQ4YWQtOWYwZC0wMjk4NDAwM2NlODMiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcyMDM3MTI0NCwiZXhwIjoxNzM1OTIzMjQ0fQ.nwwht27uL33NJwfjRIFrrGXgCHIxEr8qvxM2s-U-KSU";
// API call to create meeting
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });

  const { roomId } = await res.json();
  return roomId;
};