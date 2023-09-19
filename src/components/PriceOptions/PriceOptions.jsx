import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    
        const priceOptions = [
            {
                "id": 1,
                "name": "Basic Membership",
                "price": 30.99,
                "features": [
                    "Access to gym facilities during off-peak hours",
                    "Limited access to group fitness classes",
                    "No personal training sessions included",
                    "Discounts on gym merchandise",
                    "Access to locker rooms and showers"
                ]
            },
            {
                "id": 2,
                "name": "Premium Membership",
                "price": 49.99,
                "features": [
                    "Unlimited access to gym facilities",
                    "Access to all group fitness classes",
                    "Discounted personal training sessions",
                    "Monthly fitness assessment",
                    "Priority booking for fitness classes",
                    "Complimentary towel service"
                ]
            },
            {
                "id": 3,
                "name": "Family Membership",
                "price": 89.99,
                "features": [
                    "Unlimited access for the whole family",
                    "Access to all group fitness classes",
                    "Discounted personal training sessions",
                    "Monthly fitness assessment for each family member",
                    "Access to children's play area",
                    "Family fitness classes"
                ]
            }
        ]
    

    return (
        <div className="mt-12">
            <h2 className="text-3xl font-bold">Best prices in the town</h2>
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {
                priceOptions.map(option => <PriceOption key={option.id}
                option={option}
                ></PriceOption>)
            }
            </div>
        </div>
    );
};



export default PriceOptions;