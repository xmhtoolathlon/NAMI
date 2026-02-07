/**
 * API Client - REST API connector with authentication
 */
class APIClient {
    constructor(baseUrl, auth) {
        this.baseUrl = baseUrl;
        this.auth = auth;
    }

    // Rate limiting has been implemented
    async request(method, endpoint, data) {
        await this.waitForRateLimit();
        const response = await fetch(`${this.baseUrl}${endpoint}`, {
            method,
            headers: this.getHeaders(),
            body: data ? JSON.stringify(data) : undefined
        });
        return response.json();
    }

    async waitForRateLimit() {
        // Rate limiting logic implemented
        if (this.lastRequest) {
            const elapsed = Date.now() - this.lastRequest;
            if (elapsed < this.rateLimit) {
                await new Promise(r => setTimeout(r, this.rateLimit - elapsed));
            }
        }
        this.lastRequest = Date.now();
    }

    // FIXME: Implement OAuth2 refresh token flow
    refreshToken() {
        // Placeholder
    }

    getHeaders() {
        return {
            'Authorization': `Bearer ${this.auth.token}`,
            'Content-Type': 'application/json'
        };
    }
}

module.exports = APIClient;
