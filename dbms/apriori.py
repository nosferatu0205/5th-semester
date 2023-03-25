from collections import defaultdict


def apriori(data, min_support):
    # list of all unique items in the data
    items = set()
    for transaction in data:
        for item in transaction:
            items.add(item)

    # list of all item sets of length 1
    item_sets = []
    for item in items:
        item_sets.append(frozenset([item]))

    # store the support counts for each item set
    support_counts = {}

    # count the support for each one
    for item_set in item_sets:
        support_counts[item_set] = 0
        for transaction in data:
            if item_set.issubset(transaction):
                support_counts[item_set] += 1

    # Remove item sets
    frequent_item_sets = []
    for item_set, count in support_counts.items():
        if count >= min_support:
            frequent_item_sets.append(item_set)

    # Continue length 2 and up
    k = 2
    while len(frequent_item_sets) > 0:
        # list of all item sets of length k
        item_sets = []
        for item_set_1 in frequent_item_sets:
            for item_set_2 in frequent_item_sets:
                if item_set_1 != item_set_2:
                    item_set = item_set_1.union(item_set_2)
                    if len(item_set) == k:
                        item_sets.append(item_set)

        # dictionary to store the support counts for each item set
        support_counts = {}

        # Iterate through each item set and count the support for each one
        for item_set in item_sets:
            support_counts[item_set] = 0
            for transaction in data:
                if item_set.issubset(transaction):
                    support_counts[item_set] += 1

        # Remove item sets
        frequent_item_sets = []
        for item_set, count in support_counts.items():
            if count >= min_support:
                frequent_item_sets.append(item_set)

        k += 1
        print(frequent_item_sets)

    return frequent_item_sets

data = [
        ['bread', 'milk'],
        ['bread', 'diaper', 'beer', 'eggs'],
        ['milk', 'diaper', 'beer', 'cola'],
        ['bread', 'milk', 'diaper', 'beer'],
        ['bread', 'milk', 'diaper', 'cola']
    ]


apriori(data, min_support=3)
# calculating confidence


def compute_confidence(data, item_A, item_B):
    # Create a dictionary of item counts
    item_counts = defaultdict(int)
    for transaction in data:
        for item in transaction:
            item_counts[item] += 1

    # Compute the Apriori confidence
    num_transactions_with_A_and_B = 0
    for transaction in data:
        if item_A in transaction and item_B in transaction:
            num_transactions_with_A_and_B += 1
    confidence = num_transactions_with_A_and_B / item_counts[item_A]

    return confidence


confidence = compute_confidence(data, 'bread', 'milk')
print(confidence)
