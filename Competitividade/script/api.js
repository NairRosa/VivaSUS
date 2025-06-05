// API configuration
const API_URL = 'http://localhost:3000';

// User API functions
export async function createUser(userData) {
    try {
        const response = await fetch(`${API_URL}/usuarios`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
}

export async function loginUser(credentials) {
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });
        
        if (!response.ok) {
            throw new Error('Credenciais inválidas');
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
}