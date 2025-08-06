function execute() {
    try {
        const result = JSON.parse('isso não é JSON')
        console.log(result)
    } catch (error) {
        console.error('Algo deu errado:', error.message)
    }
}

execute()