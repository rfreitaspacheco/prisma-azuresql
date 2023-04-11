const prisma = require('../shared/prisma')
const handleError = require('../shared/error')

module.exports = async function (context, req) {
   try {
        const { id} = req.params;

        const employee = await prisma.employee.findUnique({
            where: {
                employee_id: String(id)
            }
        })
        if(employee=== null){
            return handleError(404, 'This employee not exists!');
        }
    
        return {
            status: 200,
            body: employee,
        };
    


   } catch (error) {
        context.log('Error to create a new Employee');
        context.log(error);
        return handleError(500, error);
   }
};