export const getAllPosts = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/post`, {
      method: "GET",
      headers: {
        "Content-type": "application/json"
      },
      cache: "no-store"
    })

    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }
    return res.json();
  } catch (error) {
    console.log(error)
  }
}

export const getPostById = async (id) => {
  try {
    console.log(process.env.API_URL);
    const res = await fetch(`${process.env.API_URL}/post/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json"
      },
      cache: "no-store"
    })

    if (!res.ok) {
      throw new Error(`Failed to fetch post with id ${id}`);
    }
    return res.json();
  } catch (error) {
    console.log(error)
  }
}

export const createPost = async (body) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      cache: "no-store",
      body: JSON.stringify(body)
    })

    if (!res.ok) {
      throw new Error("Failed to create blog post");
    }
    return res.json();
  } catch (error) {
    console.log(error)
  }
}