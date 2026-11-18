const API_BASE_URL = "http://localhost:8080/api";

// Reusable function for sending requests
async function request(endpoint, options = {}) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage || `Request failed: ${response.status}`);
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}

// USER API
export const userAPI = {
  getAll: () => request("/users"),

  getById: (id) => request(`/users/${id}`),

  register: (user) =>
    request("/users/register", {
      method: "POST",
      body: JSON.stringify(user),
    }),
};

// COMPANY API
export const companyAPI = {
  getAll: () => request("/companies"),

  getById: (id) => request(`/companies/${id}`),

  add: (company) =>
    request("/companies", {
      method: "POST",
      body: JSON.stringify(company),
    }),

  update: (id, company) =>
    request(`/companies/${id}`, {
      method: "PUT",
      body: JSON.stringify(company),
    }),

  delete: (id) =>
    request(`/companies/${id}`, {
      method: "DELETE",
    }),
};

// JOB APPLICATION API
export const applicationAPI = {
  getByUser: (userId) => request(`/applications/user/${userId}`),

  getById: (id) => request(`/applications/${id}`),

  getByStatus: (userId, status) =>
    request(
      `/applications/user/${userId}/status/${encodeURIComponent(status)}`
    ),

  add: (application) =>
    request("/applications", {
      method: "POST",
      body: JSON.stringify(application),
    }),

  update: (id, application) =>
    request(`/applications/${id}`, {
      method: "PUT",
      body: JSON.stringify(application),
    }),

  delete: (id) =>
    request(`/applications/${id}`, {
      method: "DELETE",
    }),
};

// INTERVIEW API
export const interviewAPI = {
  getByUser: (userId) => request(`/interviews/user/${userId}`),

  getById: (id) => request(`/interviews/${id}`),

  add: (interview) =>
    request("/interviews", {
      method: "POST",
      body: JSON.stringify(interview),
    }),

  update: (id, interview) =>
    request(`/interviews/${id}`, {
      method: "PUT",
      body: JSON.stringify(interview),
    }),

  delete: (id) =>
    request(`/interviews/${id}`, {
      method: "DELETE",
    }),
};

// DEADLINE API
export const deadlineAPI = {
  getByUser: (userId) => request(`/deadlines/user/${userId}`),

  getById: (id) => request(`/deadlines/${id}`),

  add: (deadline) =>
    request("/deadlines", {
      method: "POST",
      body: JSON.stringify(deadline),
    }),

  update: (id, deadline) =>
    request(`/deadlines/${id}`, {
      method: "PUT",
      body: JSON.stringify(deadline),
    }),

  delete: (id) =>
    request(`/deadlines/${id}`, {
      method: "DELETE",
    }),
};
