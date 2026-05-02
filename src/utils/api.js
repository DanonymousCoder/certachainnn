const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3050/api';

const parseError = async (response, fallbackMessage) => {
  const errorData = await response.json().catch(() => null);

  if (Array.isArray(errorData?.error)) {
    return errorData.error.map((issue) => issue.message).join(', ');
  }

  return errorData?.error || fallbackMessage;
};

export const issueCertificate = async (payload) => {
  const response = await fetch(`${API_BASE_URL}/certificates/issue`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!response.ok) {
    throw new Error(await parseError(response, 'Failed to issue certificate'));
  }
  return response.json();
};

export const verifyCertificate = async (certId) => {
  const response = await fetch(`${API_BASE_URL}/certificates/verify/${certId}`);
  if (!response.ok) {
    throw new Error(await parseError(response, 'Failed to verify certificate'));
  }
  return response.json();
};

export const getStudentCredentials = async (walletAddress) => {
  const response = await fetch(`${API_BASE_URL}/students/${walletAddress}/credentials`);
  if (!response.ok) {
    throw new Error(await parseError(response, 'Failed to fetch credentials'));
  }
  return response.json();
};

export const generateSkillReport = async (credentials) => {
  const response = await fetch(`${API_BASE_URL}/ai/skill-report`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ credentials })
  });
  if (!response.ok) {
    throw new Error(await parseError(response, 'Failed to generate skill report'));
  }
  return response.json();
};

export const claimWallet = async (email, certId) => {
  const response = await fetch(`${API_BASE_URL}/users/claim`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, certId })
  });
  if (!response.ok) {
    throw new Error(await parseError(response, 'Failed to claim wallet'));
  }
  return response.json();
};

export const getStats = async () => {
  const response = await fetch(`${API_BASE_URL}/stats`);
  if (!response.ok) {
    throw new Error(await parseError(response, 'Failed to fetch stats'));
  }
  return response.json();
};

export const getAllCertificates = async (limit) => {
  const query = typeof limit === 'number' ? `?limit=${limit}` : '';
  const response = await fetch(`${API_BASE_URL}/certificates${query}`);
  if (!response.ok) {
    throw new Error(await parseError(response, 'Failed to fetch certificates'));
  }
  return response.json();
};
