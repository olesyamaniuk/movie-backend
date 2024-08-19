const ctrlWrapper = controller => {
    return async (req, res, next)=> {
        try {
            await controller(req, res, next);
        }
        catch(error){
            next(error);
        }
    };

    // return ctrlWrapper;
};

export default ctrlWrapper;
