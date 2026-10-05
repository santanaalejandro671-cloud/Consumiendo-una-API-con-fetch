interface ApiUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

interface User {
  name: string;
  email: string;
  username: string;
  city: string;
}

const USERS_ENDPOINT = "https://jsonplaceholder.typicode.com/users";

async function getUsers(): Promise<void> {
  try {
    const apiResponse = await fetch(USERS_ENDPOINT);

    if (!apiResponse.ok) {
      throw new Error(`Error HTTP: ${apiResponse.status}`);
    }

    const response: ApiUser[] = await apiResponse.json();

    console.log(response[0]);

    const users: User[] = response.map((user) => ({
      name: user.name,
      email: user.email,
      username: user.username,
      city: user.address.city
    }));

    console.log(users);

    const usersWithBusinessOrOrganizationEmail: User[] = users.filter(
      (user) => user.email.endsWith(".biz") || user.email.endsWith(".org")
    );

    console.log(usersWithBusinessOrOrganizationEmail);
  } catch (error) {
    console.error("No se pudieron obtener los usuarios:", error);
  }
}

getUsers();
