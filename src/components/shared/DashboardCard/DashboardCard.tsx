import {
    Box,
    ButtonProps,
    Card, CardBody,
    CardFooter,
    CardHeader,
    CardProps,
    Heading,
} from "@chakra-ui/react";
import {SubmitButton} from "../Buttons";

interface PropsForCard extends CardProps {
    height: string,
    cardWidth: string,
    headerName: string,
    buttonWidth: string,
    label: string;
    buttonText: string,
    optionalBodyOne?: any,
    optionalBodyTwo?: any,

}

export function DashboardCard({
                                  headerName,
                                  height,
                                  cardWidth,
                                  buttonWidth,
                                  buttonText,
                                  label,
                                  optionalBodyOne,
                                  optionalBodyTwo
                              }: PropsForCard) {
    return (
        <Card height={height} width={cardWidth} borderRadius={20} boxShadow={'2xl'} variant={'elevated'}>
            <CardHeader bg={'#4EA4B1'} minW={'70%'} padding={'10px'}
                        alignSelf={"center"} borderBottomLeftRadius={20}
                        borderBottomRightRadius={20} textAlign={'center'}>
                <Heading textAlign={'center'} fontSize='20px' color={'white'} noOfLines={1}>{headerName}</Heading>
            </CardHeader>
            <CardBody alignSelf={"center"}>
                {optionalBodyOne}
                {optionalBodyTwo}
            </CardBody>
            <CardFooter alignSelf={"center"}>
                <SubmitButton width={buttonWidth} label={label}>{buttonText}</SubmitButton>
            </CardFooter>
        </Card>
    )
}
