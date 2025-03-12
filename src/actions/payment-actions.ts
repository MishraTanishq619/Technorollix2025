"use server";
import { connectToDatabase } from "@/lib/mongodb";
import { Transaction, ITransaction } from "@/models/transaction.model";

export async function addTransactionIdAction(transactionId: string, userEmail: string, currentPayAmount: number): Promise<ITransaction> {
    try {
        await connectToDatabase();

        console.log("X1 : ", transactionId, userEmail, currentPayAmount);

        // Create a new transaction object
        const newTransaction = new Transaction({
            transactionId,
            userEmail,
            currentPayAmount,
            amountAtAdmin: 0,
            acknowledgementByAdmin: false,
            clearanceApproval: false,
        });

        console.log("X1 newTransaction : ", newTransaction);
        
        // Save the transaction to the database
        const savedTransaction = await newTransaction.save();
        
        console.log("X1 savedTransaction : ", savedTransaction);

		return JSON.parse(JSON.stringify(savedTransaction));
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Failed to add transaction ID: ${error.message}`);
        } else {
            throw new Error("Failed to add transaction ID");
        }
    }
}

export async function getTransactionsByUserEmail(userEmail: string): Promise<(ITransaction & {createdAt : Date})[]> {
    try {
        await connectToDatabase();

        // Find all transactions for the given userEmail
        const transactions = await Transaction.find({ userEmail }).lean<ITransaction[]>();

		return JSON.parse(JSON.stringify(transactions));
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Failed to get transactions for user: ${error.message}`);
        } else {
            throw new Error("Failed to get transactions for user");
        }
    }
}