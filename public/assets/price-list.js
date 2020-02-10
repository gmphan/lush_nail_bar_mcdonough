'use strict'

const priceList = {
    acrylic:{
        'Acrylic Full Set'              : '$25+',
        'Acrylic Fill In'               : '$18+',
        'Acrylic Ombre Full Set'        : '$40+',
        'Acrylic Ombre Fill in'         : '$30+',
        'Gel Powder Full Set'           : '$32+',
        'Gel Powder Fill in'            : '$22+',
        'Pink & White Full Set'         : '$45+',
        'Pink & White Fill - In'        : '$38+',
        'Pink Powder Full Set'          : '$35+',
        'Pink Powder Fill in'           : '$27+',
        'Gel Polish w/Acrylic Full Set' : '$10+'  
    },
    sns:{
        'SNS on Real Nails'             : '$30+',
        'SNS add-on Tips'               : '$35+',
        'SNS French'                    : '$35+',
        'SNS Full Set'                  : '$35+',
        'SNS Ombre'                     : '$45+',
        'SNS Full Set Ombre'            : '$50+'
    },
    gel_polish:{
        'Gel Polish w/Manicure (Without Take Off)'  : '$25+',
        'Gel Polish w/Maniicure (With Take Off)'    : '$30+',
        'Gel Polish w/Pedicure'                     : '$38',
        'Gel Polish French w/Manicure'              : '$30',
        'Gel Polish French w/Pedicure'              : '$42',
        'Gel Polish Change on Hands'                : '$20',
        'Gel Polish Change on Feet'                 : '$25',
        'Gel Polish Only'                           : '$20'
    },
    mani_pedi:{
        'Pedicure'                      : '$23',
        'Manicure'                      : '$15',
        'Pedicure & Manicure'           : '$35'
    },
    additional:{
        'Polish Change Hand Color'                  : '$8',
        'Polish Change Hand French of American'     : '$12',
        'Polish Change Toes Color'                  : '$10',
        'Polish Change Toes French American'        : '$15',
        'Nail Repair'                               : '$5+',
        'Nails Cut Down Acrylic'                    : '$3+',
        'Nails Soak Off Acrylic'                    : '$10',
        'Nail Art Design'                           : '$5+',
        'Paraffin Wax Hand'                         : '$8',
        'Paraffin Wax Leg'                          : '$10',
        'Take Off Gel Polish or SNS'                : '$10',
        '2 Acrylic on Toes'                         : '$12',
        'Chrome Additional'                         : '$25'
    },
    spa_pedi:{
        '1. Regular Pedicure: Pepper mint soak in, nail shapping, cuticle care + callus removal, finish with soothing and massage noisturizing lotion, and polish.' : '$23',

        'Combo Classic' : '$36',
        '2. Classic Deluxe Pedicure: Pepper mint soak in, nail shapping, cuticle care + callus removal, exfoliate with softening lemon sugar scrub, hot towel. Finish with moisturizing with lotion massage and polish.': '$28',
        
        'Combo Deluxe': '$45',
        '3. Classic Deluxe Plus Pedicure: Pepper mint soak in, nail shapping, cuticle care + callus removal, exfoliate with softening lemon sugar scrub + Foot Mask, hot towel. Finish with moisturizing with lotion massage and polish.': '$32',
        
        'Combo Deluxe Plus' : '$52',
        '4. Deluxe OPI Pedicure: Pepper mint soak in, nail shapping, cuticle care + callus removal, exfoliate with softening OPI sugar scrub + Foot mask, hot towel. Finish with moisturizing with OPI lotion massage and polish.': '$34',
        
        'Combo Duluxe OPI': '$58',
        '5. Deluxe OPI Pedicure w/Paraffin: Pepper mint soak in, nail shapping, cuticle care + callus removal, exfoliate with softening OPI sugar scrub + Foot mask + Paraffin wax, hot towel. Finish with moisturizing with OPI lotion massage and polish.': '$40',
        
        'Combo Deluxe OPI W/Paraffin Wax': '$65',
        '6. Luxury OPI Pedicure: Pepper mint soak in, nail shapping, cuticle care + callus removal, exfoliate with softening OPI sugar scrub + Foot Mask + Paraffin wax, hot towel, hot stone massage to releaseiles and muscle and massage OPI lotion and polish.': '$50',
        
        'Combo Luxury OPI':'$75',
        '7. Lush Nail Special Nature: Sea salt soak, mud masque, massage cream, sugar scrub, hot towel': '$40+',
        
        '8. VIP Luxury Nature: Sea salt soak, sugar scrub, hot towel, masque massage cream, paraffin wax, hot stone, massage.': '$50+'
    },
    children:{
        '10 Year old and under':'',
        'Kid Manicure': '$10+',
        'Kid Pedicure (under 4 ft.)': '$18+',
        'Kid Pedicure (over 4 ft.)':'$23+',
        'Kid Manicure & Pedicure (under 4 ft.)': '$28+',
        'Kid Nail Art (under 4 ft.)': '$4+',
        'Nail Polish (under 4 ft.)':'$5+',
        'Toe Polish (under 4 ft.)':'$5+'
        
    },
    waxing:{
        'Eyebrows':'$9',
        'Lip':'$5',
        'Chin':'$7+',
        'Whole Face':'$30+',
        'Underarms':'$20+',
        'Half Arms':'$35+',
        'Half Legs':'$42+',            
    },
    eyelash:{
        'Individual Lash': '$25',
        'Eyelashes Whole Strip':'$16',
        'Eyelash Extensions':'$120+',
        'Eyelashes Fill':'$50+',
    }
}

module.exports = priceList