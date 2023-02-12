import { getAuth } from 'firebase/auth';

export async function postWithCredential<T>(url: string, bodyData?: any): Promise<T | undefined> {
  const auth = getAuth();
  const user = auth.currentUser;
  if (!user) {
    console.log('Error!');
    return;
  }

  const response = await fetch(url, {
    method: 'post',
    body: JSON.stringify(bodyData),
    headers: {
      AuthToken: await user?.getIdToken(),
      'Content-Type': 'application/json',
    },
  }).then((data) => data.json());

  return response;
}
