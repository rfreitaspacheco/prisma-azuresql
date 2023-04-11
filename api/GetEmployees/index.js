const prisma = require('../shared/prisma')
const handleError = require('../shared/error')

module.exports = async function (context, req) {
   try {
        const employees = await prisma.employee.findMany({
            orderBy: [
            {
                name: 'asc',
            },
            ],
        });
    
        return {
            status: 200,
            body: employees,
        };
    


   } catch (error) {
        context.log('Error to create a new Employee');
        context.log(error);
        return handleError(500, error);
   }
};