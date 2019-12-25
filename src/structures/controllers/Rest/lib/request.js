class Request {
	/**
	 * Creates a new instance of Request
	 * @param client {Client}
	 * @param restController {RestController}
	 */
	constructor (client, restController) {
		this.client = client;
		this.restController = restController;
		this.options = null;
		this.response = null;
	}

	onResponse (response) {
		let handlerError;

		const successful = this.restController.responseHandlers.every(x => {
			const [success, error] = x();
			if (!success) {
				handlerError = error;
			} else {
				return true;
			}
		});

		if (!successful) {
			
		}
	}
}
