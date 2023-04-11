const prisma = require('../shared/prisma')
const handleError = require('../shared/error')

module.exports = async function (context, req) {
   try {
        const { id} = req.params;
        
        const employeeRegistrationExists = await prisma.employee.findUnique({
            where: {
                employee_id: String(id)
            }
        })
        if(!employeeRegistrationExists){
            return handleError(404, 'Employee not found!');
        }

        await prisma.employee.delete({
            where:{
                employee_id: String(id),
            },
        })
    
        return {
            status: 204,
        };
    


   } catch (error) {
        context.log('Error to delete Employee');
        context.log(error);
        return handleError(500, error);
   }
};