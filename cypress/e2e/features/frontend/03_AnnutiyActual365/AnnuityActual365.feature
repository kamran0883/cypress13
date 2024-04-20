Feature: Annuity-actual/365 Rental Calculation - flex. Calculation Engine

    Background:  Access the url And Sign with Email

        And  Set Login & Signup Joureny


    @FCAnnuityactual365 @flexCalculationRegressions @flexCalculations @prod-sanity @flex-sanity
    Scenario: Rental Calculation Annuity-actual/365 with Advance Mode without APR and RV no structured
        Given Annuity-actual365 Rental Calculation method available for Rental Calculation
        When Read the combinations for Annuity-actual365 Rental Calculation
        Then Input the financial details for the verification of Annuity-actual365 for Advance_mode_without_RV_with_APr_no_sturctured

    # @prod-sanity @flex-sanity @FCAnnuityactual365 @flexCalculationRegressions @flexCalculations @Release4
    # Scenario: Rental Calculation Annuity-actual/365 with Arrear  Mode without APR and RV no structured
    #     Given Annuity-actual365 Rental Calculation method available for Rental Calculation
    #     When Read the combinations for Annuity-actual365 Rental Calculation
    #     Then Input the financial details for the verification of Annuity-actual365 for Arrear_mode_without_RV_with_APr_no_sturctured

    # @prod-sanity @flex-sanity @FCAnnuityactual365 @flexCalculationRegressions @flexCalculations @Release4
    # Scenario: Rental Calculation Annuity-actual/365 with Advance Mode No APR and RV value
    #     Given Annuity-actual365 Rental Calculation method available for Rental Calculation
    #     When Read the combinations for Annuity-actual365 Rental Calculation
    #     Then Input the financial details for the verification of Annuity-actual365 for Advance_mode_only

    # @prod-sanity @flex-sanity @FCAnnuityactual365 @flexCalculationRegressions @flexCalculations @Release4
    # Scenario: Rental Calculation Annuity-actual/365 with Arrear Mode No APR and RV value
    #     Given Annuity-actual365 Rental Calculation method available for Rental Calculation
    #     When Read the combinations for Annuity-actual365 Rental Calculation
    #     Then Input the financial details for the verification of Annuity-actual365 for Arrear_mode_only

    # @prod-sanity @flex-sanity @FCAnnuityactual365 @flexCalculationRegressions @flexCalculations
    # Scenario: Rental Calculation Annuity-actual/365 with Advance Mode APR and RV
    #     Given Annuity-actual365 Rental Calculation method available for Rental Calculation
    #     When Read the combinations for Annuity-actual365 Rental Calculation
    #     Then Input the financial details for the verification of Annuity-actual365 for Monthly_Advance_without_Rv_and_sturctured

    # @prod-sanity @flex-sanity @FCAnnuityactual365 @flexCalculationRegressions @flexCalculations
    # Scenario: Rental Calculation Annuity-actual/365 with Advance Mode APR and RV
    #     Given Annuity-actual365 Rental Calculation method available for Rental Calculation
    #     When Read the combinations for Annuity-actual365 Rental Calculation
    #     Then Input the financial details for the verification of Annuity-actual365 for Monthly_Arrear_without_Rv_and_sturctured

    # @FCAnnuityactual365 @flexCalculationRegressions @flexCalculations
    # Scenario: Rental Calculation Annuity-actual/365 with Advance Mode Interest Rate, RV, Structured Rentals and Interest Only
    #     Given Annuity-actual365 Rental Calculation method available for Rental Calculation
    #     When Read the combinations for Annuity-actual365 Rental Calculation
    #     Then Input the financial details for the verification of Annuity-actual365 for Advance_Mode_Interest_Rate_RV_Structured_Interest_Only

    # @FCAnnuityactual365 @flexCalculationRegressions @flexCalculations
    # Scenario: Rental Calculation Annuity-actual/365 with Arrear Mode Interest Rate, RV, Structured Rentals and Interest Only
    #     Given Annuity-actual365 Rental Calculation method available for Rental Calculation
    #     When Read the combinations for Annuity-actual365 Rental Calculation
    #     Then Input the financial details for the verification of Annuity-actual365 for Arrear_Mode_Interest_Rate_RV_Structured_Interest_Only

    # @FCAnnuityactual365 @flexCalculationRegressions @flexCalculations
    # Scenario: Rental Calculation Annuity-actual/365 with Advance Mode, Interest Rate, Structured - Balloon
    #     Given Annuity-actual365 Rental Calculation method available for Rental Calculation
    #     When Read the combinations for Annuity-actual365 Rental Calculation
    #     Then Input the financial details for the verification of Annuity-actual365 for Advance_Mode_Interest_Rate_Structured_Balloon_Case

    # @FCAnnuityactual365 @flexCalculationRegressions @flexCalculations
    # Scenario: Rental Calculation Annuity-actual/365 with Arrear Mode, Interest Rate, Structured - Balloon
    #     Given Annuity-actual365 Rental Calculation method available for Rental Calculation
    #     When Read the combinations for Annuity-actual365 Rental Calculation
    #     Then Input the financial details for the verification of Annuity-actual365 for Arrear_Mode_Interest_Rate_Structured_Balloon_Case

    # @FCAnnuityactual365 @flexCalculationRegressions @flexCalculations @Release4
    # Scenario: Rental Calculation Annuity-actual/365 with Extension days.
    #     Given Annuity-actual365 Rental Calculation method available for Rental Calculation
    #     When Read the combinations for Annuity-actual365 Rental Calculation
    #     Then Input the financial details for the verification of Annuity-actual365 for Advance_Extention

    # @FCAnnuityactual365 @flexCalculationRegressions @flexCalculations @Release4
    # Scenario: Rental Calculation Annuity-actual/365 with Extension days.
    #     Given Annuity-actual365 Rental Calculation method available for Rental Calculation
    #     When Read the combinations for Annuity-actual365 Rental Calculation
    #     Then Input the financial details for the verification of Annuity-actual365 for Arrear_Extention

    # @FCAnnuityactual365 @flexCalculationRegressions @flexCalculations
    # Scenario: Financial Calculation Annuity-Actual/365 with Arrear Mode, Structured & Interst Only Retals for Income Posting
    #     Given Annuity-actual365 Rental Calculation method available for Rental Calculation
    #     When Read the combinations for Annuity-actual365 Rental Calculation
    #     Then Input the financial details for the verification of Annuity-actual365 for Advance_Structured_Interest_Only_Income_Posting

    # @FCAnnuityactual365 @flexCalculationRegressions @flexCalculations
    # Scenario: Financial Calculation Annuity-Actual/365 with Arrear Mode for Income Posting
    #     Given Annuity-actual365 Rental Calculation method available for Rental Calculation
    #     When Read the combinations for Annuity-actual365 Rental Calculation
    #     Then Input the financial details for the verification of Annuity-actual365 for Arrear_Mode_Income_Posting

    # @prod-sanity @flex-sanity @FCAnnuityactual365 @flexCalculationRegressions @flexCalculations
    # Scenario: Financial Calculation Annuity-Actual/365 with Arrear Mode, Baloon Rentals for Income Posting
    #     Given Annuity-actual365 Rental Calculation method available for Rental Calculation
    #     When Read the combinations for Annuity-actual365 Rental Calculation
    #     Then Input the financial details for the verification of Annuity-actual365 for Arrear_Mode_Baloon_Rentals

    # @FCAnnuityactual365 @flexCalculationRegressions @flexCalculations
    # Scenario: Financial Calculation Annuity-Actual/365 with Arrer Mode with Extension Days for Income Posting
    #     Given Annuity-actual365 Rental Calculation method available for Rental Calculation
    #     When Read the combinations for Annuity-actual365 Rental Calculation
    #     Then Input the financial details for the verification of Annuity-actual365 for Arrear_Mode_Income_Posting_Extension_Days

    # @FCAnnuityactual365 @flexCalculationRegressions @flexCalculations
    # Scenario: Financial Calculation Annuity-Actual/365 with Advance Mode with Extension Days for Income Posting
    #     Given Annuity-actual365 Rental Calculation method available for Rental Calculation
    #     When Read the combinations for Annuity-actual365 Rental Calculation
    #     Then Input the financial details for the verification of Annuity-actual365 for Advance_Mode_Income_Posting_Extension_Days